const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Product = require("../models/product.model");
const Review = require("../models/reviews.model");
const { NotFoundError, BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { checkPermissions } = require("../utils");

const createReview = asyncHandler(async(req, res) => {
  const { rating, title, comment, product: productId } = req.body;

  const isValidProduct = await Product.findOne({ _id: productId});

  if (!isValidProduct) {
    throw new NotFoundError(`No product with id: ${productId}`);
  }


  const alreadySubmitted = await Review.findOne({
    user: req.user._id,
    product: productId,
  });

  if (alreadySubmitted) {
    throw new BadRequestError("Already submitted review for this product.");
  }

  const review = await Review.create({
    rating,
    title,
    comment,
    user: req.user._id,
    product: productId,
  });

  res.status(StatusCodes.CREATED).json({ review });
});

const getSingleReview = asyncHandler(async(req, res) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new NotFoundError(`No review with id: ${reviewId}`);
  }
  res.status(StatusCodes.OK).json({ review });
});

const getAllReviews = asyncHandler(async(req, res) => {
  const reviews = await Review.find({}).populate({
    path: "product",
    select: "name, price, image",
  });
  res.status(StatusCodes.OK).json({ reviews, nbHits: reviews.length });
});

const updateReview = asyncHandler(async(req, res) => {
  const { id: reviewId } = req.params;
  const { title, comment, rating } = req.body;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new NotFoundError(`No review with id: ${reviewId}`);
  }

  review.title = title;
  review.comment = comment;
  review.rating = rating;

  await review.save();
  res.status(StatusCodes.OK).json({ review });
});

const deleteReview = asyncHandler(async(req, res) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new NotFoundError(`No review with id: ${reviewId}`);
  }

  checkPermissions(req.user, review.user);

  await Review.deleteOne({_id: reviewId})
  res.status(StatusCodes.OK).json({ msg: "Success! Review has been removed" });
});

const getSingleProductReviews = asyncHandler(async(req, res) => {
  const { id: productId } = req.params;

  const reviews = await Review.find({ product: productId });
  res.status(StatusCodes.OK).json({ reviews });
});

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  getSingleReview,
  getSingleProductReviews,
};
