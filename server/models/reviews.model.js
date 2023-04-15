const { Schema, model, Types } = require("mongoose");

const reviewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },
  { timestamps: true }
);

reviewsSchema.index({ product: 1, user: 1 }, { unique: true });

reviewsSchema.statics.calculateAverageRating = async function (productId) {
  const result = await this.aggregate([
    { $match: { product: productId } },
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
      },
    },
  ]);
  console.log(result);
  try {
    await this.model('Product').findOneAndUpdate({_id: productId}, {averageRating: Math.ceil(result[0]?.averageRating) || 0})
  } catch (error) {
    console.log(error)
  }
};

reviewsSchema.post("save", async function () {
  await this.constructor.calculateAverageRating(this.product);
});

reviewsSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.product);
});

const Review = model("Review", reviewsSchema);

module.exports = Review;
