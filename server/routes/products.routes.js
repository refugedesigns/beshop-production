const { Router } = require("express");
const multer = require("multer");
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers");
const { validateCreateProduct } = require("../middlewares");
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
  .get(getProduct)
  .patch(
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "imageGallery", maxCount: 5 },
    ]),
    updateProduct
  )
  .delete(deleteProduct);

module.exports = router;
