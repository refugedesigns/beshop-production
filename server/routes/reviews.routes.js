const { Router } = require("express");
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
  getSingleProductReview,
  getSingleReview,
} = require("../controllers");

const router = Router();

router.route("/").get(getAllReviews).post(createReview);

router.route("/getSingleProductReview").get(getSingleProductReview);

router
  .route("/:id")
  .patch(updateReview)
  .delete(deleteReview)
  .get(getSingleReview);


  module.exports = router;
