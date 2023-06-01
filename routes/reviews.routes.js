const { Router } = require("express");
const { authenticateUser, validateCreateReview } = require('../middlewares')
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
  getSingleProductReviews,
  getSingleReview,
} = require('../controllers')

const router = Router();

router.route("/").get(getAllReviews).post(authenticateUser, validateCreateReview, createReview);;


router.route("/getSingleProductReview/:id").get(getSingleProductReviews);

router
  .route("/:id")
  .patch(authenticateUser,updateReview)
  .delete(authenticateUser, deleteReview)
  .get(getSingleReview);


module.exports = router;
