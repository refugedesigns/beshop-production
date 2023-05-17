const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductViewCount
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
  updateViewedProducts,
  updateWishlist
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
  getCurrentUserOrders,
} = require("./orders.controller");

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  updateProductViewCount,
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
  getCurrentUserOrders,
  updateViewedProducts,
  updateWishlist,
};
