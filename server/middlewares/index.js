const errorHandlerMiddleware = require("./error-handler")
const notFoundMiddleware = require("./not-found")
const { validateCreateProduct } = require("./validation")

module.exports = {
    errorHandlerMiddleware,
    notFoundMiddleware,
    validateCreateProduct,
}