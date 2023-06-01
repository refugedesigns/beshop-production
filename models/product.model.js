const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    productNumber: {
      type: String,
      required: true,
    },
    isSale: {
      type: Boolean,
      default: false,
    },
    new: {
      type: Boolean,
      default: true,
    },
    isStocked: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["nail", "skin", "makeup", "spa", "perfume", "hair"],
    },
    filterItems: {
      type: [String],
      required: true,
      enum: ["nail", "skin", "makeup", "spa", "perfume", "hair"],
    },
    imageGallery: {
      type: [String],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }, id: false }
);

productSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

productSchema.pre('deleteOne',async function(next) {
  const productDoc = await this.model.findOne(this.getQuery())
  console.log('deleting product ' + productDoc)
  next()
})

const Product = model('Product', productSchema)

module.exports = Product