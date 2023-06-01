const { Router } = require("express");
const {
  authorizePermissions,
  authenticateUser,
  validateProduct,
} = require("../middlewares");
const {
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
  updateViewedProducts,
  updateWishlist,
  clearWishlistItems
} = require("../controllers");

const router = Router();

router.get("/", authenticateUser, authorizePermissions("admin"), getAllUsers);
router.get("/showCurrentUser", authenticateUser, showCurrentUser);
router.patch("/updateUser", updateUser);
router.patch(
  "/updateViewedProducts",
  authenticateUser,
  validateProduct,
  updateViewedProducts
);
router.patch("/updateWishlist", authenticateUser, validateProduct, updateWishlist);
router.patch("/clearWishlist", authenticateUser, clearWishlistItems);
router.patch("/updateUserPassword", updateUserPassword);
router.get("/:id", getSingleUser);

module.exports = router;
