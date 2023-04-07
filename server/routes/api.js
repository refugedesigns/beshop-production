const { Router } = require("express")
const productsRoutes = require("./products.routes")

const api = Router();

api.use("/products", productsRoutes)


module.exports = api
