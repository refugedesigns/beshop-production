const asyncHandler = require("express-async-handler")


const createReview = asyncHandler(async(req, res) => {

    res.send("Create a new review")
})
const getSingleReview = asyncHandler(async(req, res) => {

    res.send("Create a new review")
})

const getAllReviews = asyncHandler(async(req, res) => {

    res.send("Get all reviews")
})
const updateReview = asyncHandler(async(req, res) => {

    res.send("Update a review")
})
const deleteReview = asyncHandler(async(req, res) => {

    res.send("Delete a review")
})
const getSingleProductReview = asyncHandler(async(req, res) => {

    res.send("Get a single product review")
})

module.exports = {
    createReview,
    getAllReviews,
    updateReview,
    deleteReview,
    getSingleReview,
    getSingleProductReview
}