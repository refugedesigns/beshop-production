const errorHandlerMiddleware = require("./error-handler")
const notFoundMiddleware = require("./not-found")
const authenticateUser = require("./auth")
const authorizePermissions = require("./authorizePermissions")
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateViewedProducts,
  validateProductViews,
  validateParams,
  validateCreateUser,
  validateLoginUser,
  validateCreateReview,
  validateVerifyEmail,
  validateCreateOrder,
} = require("./validation");

module.exports = {
  errorHandlerMiddleware,
  notFoundMiddleware,
  authenticateUser,
  authorizePermissions,
  validateCreateProduct,
  validateUpdateProduct,
  validateViewedProducts,
  validateProductViews,
  validateParams,
  validateCreateUser,
  validateLoginUser,
  validateCreateReview,
  validateVerifyEmail,
  validateCreateOrder,
};