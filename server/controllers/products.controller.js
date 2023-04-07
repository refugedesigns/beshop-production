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

const getAllProducts = asyncHandler(async (req, res) => {
  // filters -> new, isSale, isStocked, name, price, sort, numericFilters, category, filterItems, page 

  const { isNew, isSale, isStocked, search, category, filterItems, sort, fields, numericFilters } = req.query
  const queryObject = {}

  if(isNew) {
    queryObject.new = isNew === "true" ? true : false
  }

  if(isSale) {
    queryObject.isSale = isSale === "true" ? true : false
  }
  if(isStocked) {
    queryObject.isStocked = isStocked === "true" ? true : false
  }

  if(search) {
    queryObject.name = {$regex: search, $options: 'i'}
  }

  if(category) {
    queryObject.category = category
  }

  if(filterItems) {
    const filterList = filterItems.split(",")
    queryObject.filterItems =  { $all: filterList}
  }

  if(numericFilters) {
    const operatorMap = {
      ">": "$gt",
      "<": "$lt",
      ">=": "$gte",
      "<=": "$lte",
      "=": "$eq"
    }

    const regEx = /\b(<|>|>=|=|<=)\b/g
    let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)

    const options = ["price", "viewCount"]
    filters = filters.split(",").forEach(item => {
      const [field,operator,value] = item.split("-")
      if(options.includes(field)) {
        queryObject[field] = {[operator]: Number(value)}
      }
    })
  }
  console.log(queryObject)

  let result = Product.find(queryObject)
  if(sort) {
    const sortList = sort.split(",").join(" ")
    result = result.sort(sortList)
  }else {
    result = result.sort('createdAt')
  }

  if(fields) {
    const fieldList = fields.split(",").join(" ")
    result = result.select(fieldList)
  }

  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)


  const products = await result

  const totalProducts = products.length
  const numOfPages = Math.ceil(totalProducts / limit)

  res.status(StatusCodes.OK).json({ products, nbHits: totalProducts, numOfPages  });
});
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

  if (
    !req.files.image ||
    !req.files.imageGallery ||
    req.files.image.length === 0 ||
    req.files.imageGallery.length === 0
  ) {
    throw new BadRequestError("Invalid value for image or imageGallery field");
  }

  if (req.files.imageGallery.length > 5) {
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
      image.mimetype === "image/jpeg" ||
      image.mimetype === "image/jpg" ||
      image.mimetype === "image/png"
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