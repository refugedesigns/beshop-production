require("dotenv").config()
const robohashAvatars = require("robohash-avatars")
const _ = require("lodash")
const { connectDB } = require("./utils");
const Product = require("./models/product.model");
const Order = require("./models/orders.model");
const User = require("./models/user.model");

const populateDB = async function () {
  try {
    connectDB(process.env.MONGO_URL)
    await User.deleteMany({})
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    
  }
};

populateDB();
