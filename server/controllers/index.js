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
const {
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
} = require("./user.controller");


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
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
};
