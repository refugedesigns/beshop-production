const errorHandlerMiddleware = require("./error-handler")
const notFoundMiddleware = require("./not-found")
const { validateCreateProduct, validateUpdateProduct, validateCreateUser } = require("./validation")

module.exports = {
    errorHandlerMiddleware,
    notFoundMiddleware,
    validateCreateProduct,
    validateUpdateProduct,
    validateCreateUser,
}