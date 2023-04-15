const { Router } = require("express");
const multer = require("multer");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers");
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateParams,
  authenticateUser
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
    createProduct
  );
router
  .route("/:id")
  .get(validateParams, getSingleProduct)
  .patch(
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "imageGallery", maxCount: 5 },
    ]),
    validateParams,
    validateUpdateProduct,
    updateProduct
  )
  .delete(validateParams, deleteProduct);

module.exports = router;
