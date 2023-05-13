const { Schema, model, Types } = require("mongoose");

// metadata: {
// [0]     email: 'refugedesigns17@gmail.com',
// [0]     orderId: '"645ea032e9cbca0a42c9b3f0"',
// [0]     items: '[{"image":"https://res.cloudinary.com/refugedesigns/image/upload/v1680845086/GOSHOP/Detox%20body%20Cream/product-img6.jpg.jpg","name":"Detox body Cream","quantity":2},{"image":"https://res.cloudinary.com/refugedesigns/image/upload/v1680845086/GOSHOP/Detox%20body%20Cream/product-img6.jpg.jpg","name":"Detox body Cream","quantity":1}]'
// [0]   },
// shipping_details: {
// [0]     address: {
// [0]       city: 'Whitby',
// [0]       country: 'GB',
// [0]       line1: '45 Way Street',
// [0]       line2: null,
// [0]       postal_code: 'L1M 1B8',
// [0]       state: ''
// [0]     },
// [0]     name: 'Erasmus Antwi'
// [0]   },

const orderItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: [String],
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  product: {
    type: Types.ObjectId,
    required: true,
    ref: "Product",
  },
});

const orderSchema = new Schema(
  {
    shippingFees: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    orderItems: [orderItemSchema],
    status: {
      type: String,
      enum: ["pending", "paid", "delivered", "cancelled"],
      default: "pending",
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    paymentIntentId: {
      type: String,
    },
    shippingDetails: {
      address: {
        city: String,
        country: String,
        line1: String,
        line2: String,
        postalCode: String,
        state: String,
      },
      name: String,
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);

module.exports = Order;
