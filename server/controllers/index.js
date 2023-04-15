const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./products.controller");
const { register,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword, } = require("./auth.controller");
const {
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
} = require("./user.controller");

const {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  getSingleReview,
  getSingleProductReviews,
} = require("./reviews.controller");

const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  getSingleUserOrders,
} = require("./orders.controller");

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  getSingleReview,
  getSingleProductReviews,
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  getSingleUserOrders,
};
