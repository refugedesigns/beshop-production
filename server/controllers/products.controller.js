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
  // filters -> new, isSale, isStocked, name, price, sort, numericFilters, category, filterItems, page 
  console.log(req.user)
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
};


const getProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new BadRequestError(`No product with id: ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const createProduct = async (req, res) => {
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
    req.files.image?.length === 0 ||
    req.files.imageGallery?.length === 0
  ) {
    throw new BadRequestError("Invalid value for image or imageGallery field");
  }

  if (req.files.imageGallery?.length > 5) {
    throw new BadRequestError("Max values for imageGallery field exceeded.");
  }

  const productImage = image[0];
  const productImageGallery = imageGallery;
  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError(
      "File format not supported, please provide an image"
    );
  }

  const confirmGalleryImages = productImageGallery.every((image) =>
    image.mimetype.startsWith("image")
  );
  if (!confirmGalleryImages) {
    throw new BadRequestError(
      "Unsurpported value in imageGallery, please provide only images!"
    );
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
    new: isNew,
    isSale,
    isStocked,
    productNumber,
    image: mainImage.secure_url,
    imageGallery: galleryLinks,
  });

  res.status(StatusCodes.CREATED).json({ product });
};
const updateProduct = async (req, res) => {
  console.log(req.body)
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
    image,
    imageGallery,
  } = req.body;
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new BadRequestError(`No product with id: ${productId}`);
  }

  let newImage;
  let newImageGallery;

  if (req.files?.image) {
    if ((req.files?.image.length === 0)) {
      throw new BadRequestError("No image provided for image field");
    }
    const productImage = req.files?.image[0];
    newImage = await uploadBufferImage(productImage, name);
    newImage = newImage.secure_url;
  } else {
    newImage = image;
  }

  if (req.files?.imageGallery) {
    if (req.files?.imageGallery.length > 5) {
      throw new BadRequestError("Max values for imageGallery field exceeded.");
    }

    if (req.files?.imageGallery.length === 0) {
      throw new BadRequestError("No images provided for imageGallery field.");
    }
    newImageGallery = req.files?.imageGallery
    const imageGalleryResult = await Promise.all(
      newImageGallery.map((image) => {
        return new Promise((resolve, reject) => {
          const result = uploadBufferImage(image, name);
          resolve(result);
        });
      })
    );
    newImageGallery = imageGalleryResult.map((image) => image.secure_url);
  } else {
    newImageGallery = imageGallery;
  }

  product.price = price;
  product.name = name;
  product.isStocked = isStocked;
  product.isSale = isSale;
  product.oldPrice = oldPrice;
  product.colors = colors;
  product.description = description;
  product.content = content;
  product.new = isNew;
  product.category = category;
  product.filterItems = filterItems;
  product.productNumber = productNumber;
  product.image = newImage;
  product.imageGallery = newImageGallery;

  const savedProduct = await product.save();

  res.status(StatusCodes.OK).json({ product: savedProduct });
};


const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new BadRequestError(`No product with id: ${productId}`);
  }

  await Product.deleteOne({ _id: productId});

  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}