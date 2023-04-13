const { Router } = require("express")
const productsRoutes = require("./products.routes")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")

const api = Router();

api.use("/products", productsRoutes)
api.use("/auth", authRoutes)
api.use("/users", userRoutes)


module.exports = api
