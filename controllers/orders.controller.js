const asyncHandler = require("express-async-handler")
const buffer = require("../utils/buffer");
const Product = require("../models/product.model");
const Order = require("../models/orders.model");
const { StatusCodes } = require("http-status-codes");
const { checkPermissions } = require("../utils");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endPointSecrete = process.env.STRIPE_SIGNING_KEY;
const { NotFoundError } = require("../errors");

const createOrder = asyncHandler(async (req, res) => {
  let { items: cartItems, shippingFees, discount } = req.body;

  let orderItems = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.id });
    if (!dbProduct) {
      throw new NotFoundError(`No product with id: ${item.id}`);
    }

    const { name, price, image, _id, description } = dbProduct;
    const itemDescription = description.substring(0, 200);
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      description: itemDescription,
      product: _id,
      color: item.colors,
    };

    orderItems.push(singleOrderItem);
    subtotal += item.amount * price;
  }

  subtotal = subtotal * ((100 - discount) / 100);

  const total = shippingFees + subtotal;

  const order = await Order.create({
    orderItems,
    total,
    shippingFees,
    subtotal,
    user: req.user._id,
    shippingDetails: {
      address: {
        city: "",
        country: "",
        line1: "",
        line2: "",
        state: "",
        postalCode: "",
      },
      name: "",
    },
    paymentIntentId: "",
  });

  const transformedItems = orderItems.map((item) => ({
    quantity: item.amount,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        images: [item.image],
        description: item.description,
      },
    },
  }));

  let coupon;
  if (discount === 0) {
    discount = 0.01;
    coupon = await stripe.coupons.create({
      percent_off: discount,
      duration: "once",
    });
  }

  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1N6X7qGYzBNrpdKH5AYq1v0t",
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    discounts: [
      {
        coupon: coupon.id,
      },
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cart",
    metadata: {
      user: JSON.stringify(req.user._id),
      orderId: JSON.stringify(order._id),
    },
  });

  res.status(StatusCodes.CREATED).json({ id: stripeSession.id });
});

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, nbHits: orders.length });
});

const getSingleOrder = asyncHandler(async (req, res) => {
  const { id: orderId } = req.params;

  const order = await Order.findOne({ _id: orderId });

  if (!order) {
    throw new NotFoundError(`No order with id: ${orderId}`);
  }

  checkPermissions(req.user, order.user);

  res.status(StatusCodes.OK).json({ order });
});

const updateOrder = asyncHandler(async (req, res) => {
  //   const { paymentIntent } = req.body;
  //   const { id: orderId } = req.params;

  //   const order = await Order.findOne({ _id: orderId });

  //   if (!order) {
  //     throw new NotFoundError(`No order with id: ${orderId}`);
  //   }

  //   checkPermissions(req.user, order.user);

  //   order.paymentIntent = paymentIntent;
  //   order.status = "paid";

  //   await order.save();
  //   const requestBuffer = await buffer(req);
  //   const payload = requestBuffer.toString();
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endPointSecrete);
  } catch (error) {
    console.log(error);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = JSON.parse(session.metadata.orderId);
    const userId = JSON.parse(session.metadata.user);
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: userId },
      {
        shippingDetails: session.shipping_details,
        status: "paid",
        paymentIntentId: session.payment_intent,
        deliveryStatus: 'on it\'s way',
      },
      { new: true }
    );
    console.log(order);
  }

  res.status(StatusCodes.OK).json({ msg: "success" });
});

const getCurrentUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  const firstOrder = orders[0];
  if (firstOrder) {
    checkPermissions(req.user, firstOrder.user);
  }
  res.status(StatusCodes.OK).json({ orders, nbHits: orders.length });
});

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    getCurrentUserOrders
}