const {
  getAllProducts,
  getProduct,
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


module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
