const { Router } = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers");
const { validateCreateProduct } = require("../middlewares");

const router = Router();

router.route("/").get(getAllProducts).post(validateCreateProduct, createProduct);
router
  .route("/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
