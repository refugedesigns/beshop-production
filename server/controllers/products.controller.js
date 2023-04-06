const { StatusCodes} = require("http-status-codes")
const asyncHandler = require("express-async-handler");
const uploadBufferImage = require("../utils/cloudinary");
const { Product } = require("../models");
const {
  BadRequestError,
  UnauthorizedError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");

const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "All products route" });
};
const getProduct = async (req, res) => {
  throw new BadRequestError("test error");
  res.status(StatusCodes.OK).json({ msg: "Single product route" });
};
const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    oldPrice,
    price,
    colors,
    description,
    content,
    category,
    filterItems,
    isNew,
    isSale,
    isStocked,
    productNumber,
  } = req.body;
  const { image, imageGallery } = req.files;
  console.log(isSale, isNew, isStocked);
  if (
    !req.files.image ||
    !req.files.imageGallery ||
    req.files.image.length === 0 ||
    req.files.imageGallery.length === 0
  ) {
    throw new BadRequestError("Invalid value for image or imageGallery field");
  }

  if (req.files.imageGallery.length > 10) {
    throw new BadRequestError("Max values for imageGallery field exceeded.");
  }

  const productImage = image[0];
  const productImageGallery = imageGallery;
  if (
    productImage.mimetype !== "image/jpeg" &&
    productImage.mimetype !== "image/png" &&
    productImage.mimetype !== "image/jpg"
  ) {
    throw new BadRequestError(
      "Image format not supported please check your value for image field"
    );
  }

  const confirmGalleryImages = productImageGallery.every(
    (image) =>
      image.mimetype === "image/jpeg" &&
      image.mimetype !== "image/jpg" &&
      image.mimetype !== "image/png"
  );
  if (!confirmGalleryImages) {
    throw new BadRequestError("Unsurpported field in imageGallery!");
  }

  const mainImage = await uploadBufferImage(productImage, name);
  const imageGalleryResult = await Promise.all(
    productImageGallery.map((image) => {
      return new Promise((resolve, reject) => {
        const result = uploadBufferImage(image, name);
        resolve(result);
      });
    })
  );
  const galleryLinks = imageGalleryResult.map((result) => result.secure_url);

  const product = await Product.create({
    name,
    oldPrice,
    price,
    colors,
    description,
    content,
    category,
    filterItems,
    new:isNew,
    isSale,
    isStocked,
    productNumber,
    image: mainImage.secure_url,
    imageGallery: galleryLinks
  });

  res.status(StatusCodes.CREATED).json({ product });
});
const updateProduct = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: "Update product route"})
}
const deleteProduct = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: "Delete product route"})
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}