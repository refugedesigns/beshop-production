const { Router } = require("express");
const multer = require("multer");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductViewCount,
} = require("../controllers");
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateUpdateProductViewCount,
  validateParams,
  authenticateUser,
  authorizePermissions,
} = require("../middlewares");
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "imageGallery", maxCount: 5 },
    ]),
    validateCreateProduct,
    authenticateUser,
    authorizePermissions("admin, manager"),
    createProduct
  );
router.route("/updateViewCount").patch(validateUpdateProductViewCount, updateProductViewCount)
router
  .route("/:id")
  .get(validateParams, getSingleProduct)
  .patch(
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "imageGallery", maxCount: 5 },
    ]),
    validateParams,
    authenticateUser,
    authorizePermissions("admin, manager"),
    validateUpdateProduct,
    updateProduct
  )
  .delete(
    validateParams,
    authenticateUser,
    authorizePermissions("admin, manager"),
    deleteProduct
  );

module.exports = router;
