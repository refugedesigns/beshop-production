const errorHandlerMiddleware = require("./error-handler")
const notFoundMiddleware = require("./not-found")
const { validateCreateProduct, validateUpdateProduct, validateParams, validateCreateUser, validateLoginUser } = require("./validation")

module.exports = {
    errorHandlerMiddleware,
    notFoundMiddleware,
    validateCreateProduct,
    validateUpdateProduct,
    validateParams,
    validateCreateUser,
    validateLoginUser
}