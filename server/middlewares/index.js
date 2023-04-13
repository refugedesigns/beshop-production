const errorHandlerMiddleware = require("./error-handler")
const notFoundMiddleware = require("./not-found")
const authenticateUser = require("./auth")
const authorizePermissions = require("./authorizePermissions")
const { validateCreateProduct, validateUpdateProduct, validateParams, validateCreateUser, validateLoginUser } = require("./validation")

module.exports = {
    errorHandlerMiddleware,
    notFoundMiddleware,
    authenticateUser,
    authorizePermissions,
    validateCreateProduct,
    validateUpdateProduct,
    validateParams,
    validateCreateUser,
    validateLoginUser
}