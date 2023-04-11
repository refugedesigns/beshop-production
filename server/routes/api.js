const { Router } = require("express")
const productsRoutes = require("./products.routes")
const authRoutes = require("./auth.routes")

const api = Router();

api.use("/products", productsRoutes)
api.use("/auth", authRoutes)


module.exports = api
