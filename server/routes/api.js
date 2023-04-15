const { Router } = require("express")
const productsRoutes = require("./products.routes")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")
const reviewRoutes = require("./reviews.routes")
const orderRoutes = require("./orders.routes")

const api = Router();

api.use("/products", productsRoutes)
api.use("/auth", authRoutes)
api.use("/users", userRoutes)
api.use("/reviews", reviewRoutes)
api.use("/orders", orderRoutes)


module.exports = api
