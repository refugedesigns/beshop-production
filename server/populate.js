require("dotenv").config()
const robohashAvatars = require("robohash-avatars")
const _ = require("lodash")
const { connectDB } = require("./utils");
const Product = require("./models/product.model");

const populateDB = async function () {
  try {
    connectDB(process.env.MONGO_URL)
    await Product.updateMany(
      {},
      {
        colors: [
          "#FCEDEA",
          "#FEE1DB",
          "#FFD9D1",
          "#FDC5B9",
          "#FDB7A8",
          "#FFA08A",
        ],
      }
    );
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    
  }
};

populateDB();
