const asyncHandler = require("express-async-handler")


const createOrder = asyncHandler(async(req, res) => {
    res.send("Create order route")
})
const getAllOrders = asyncHandler(async(req, res) => {
    res.send("Create order route")
})
const getSingleOrder = asyncHandler(async(req, res) => {
    res.send("Create order route")
})
const updateOrder = asyncHandler(async(req, res) => {
    res.send("Create order route")
})
const getSingleUserOrders = asyncHandler(async(req, res) => {
    res.send("Create order route")
})

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    getSingleUserOrders
}