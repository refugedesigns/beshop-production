const { StatusCodes} = require("http-status-codes")


const getAllProducts = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: "All products route"})
}
const getProduct = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: "Single product route"})
}
const createProduct = async(req, res) => {
    res.status(StatusCodes.CREATED).json({msg: "Create product route"})
}
const updateProduct = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: "Update product route"})
}
const deleteProduct = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: "Delete product route"})
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}