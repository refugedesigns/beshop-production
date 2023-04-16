const asyncHandler = require("express-async-handler")
const Product = require("../models/product.model")
const Order = require("../models/orders.model")
const { StatusCodes } = require("http-status-codes")
const { checkPermissions } = require("../utils")
const stripe = require("stripe")(process.env.STRIPE_KEY)
const { NotFoundError } = require("../errors")


const createOrder = asyncHandler(async(req, res) => {
    const { items: cartItems, shippingFees} = req.body

    let orderItems = [];
    let subtotal = 0

    for (const item of cartItems) {
        const dbProduct = await Product.findOne({_id: item.product})
        if(!dbProduct) { 
            throw new NotFoundError(`No product with id: ${item.product}`)
         }

         const { name, price, image, _id } = dbProduct
         const singleOrderItem = {
            amount: item.amount,
            name,
            price,
            image,
            product: _id,
            color: item.color
         }

         orderItems.push(singleOrderItem)
         subtotal += item.amount * price 
    }

    const total = shippingFees + subtotal

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'usd'
    })

    const order = await Order.create({
        orderItems,
        total,
        shippingFees,
        subtotal,
        clientSecret: paymentIntent.client_secret,
        user: req.user._id 
    })

    res.status(StatusCodes.CREATED).json({order})
})


const getAllOrders = asyncHandler(async(req, res) => {

    const orders = await Order.find({})
    res.status(StatusCodes.OK).json({orders, nbHits: orders.length})
})


const getSingleOrder = asyncHandler(async(req, res) => {
    const { id: orderId } = req.params

    const order = await Order.findOne({_id: orderId})

    if(!order) {
        throw new NotFoundError(`No order with id: ${orderId}`)
    }

    checkPermissions(req.user, order.user)

    res.status(StatusCodes.OK).json({order})
})


const updateOrder = asyncHandler(async(req, res) => {
    const {paymentIntent} = req.body
    const { id: orderId } = req.params

    const order = await Order.findOne({_id: orderId})

    if(!order) {
        throw new NotFoundError(`No order with id: ${orderId}`)
    }

    checkPermissions(req.user, order.user)

    order.paymentIntent = paymentIntent
    order.status = "paid"

    await order.save();

    res.status(StatusCodes.OK).json({order})
})


const getCurrentUserOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({user: req.user._id})
    res.status(StatusCodes.OK).json({orders, nbHits: orders.length})
})

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    getCurrentUserOrders
}