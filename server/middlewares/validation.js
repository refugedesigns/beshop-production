const { body, param, query, validationResult } = require("express-validator");

const categories = ["nail", "skin", "makeup", "spa", "perfume", "hair"]

const validateCreateProduct = [
  body("name")
    .isString()
    .isLength({ min: 5 })
    .withMessage("Name field cannot be empty or less than 10 chars"),
  body("productNumber")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Product Number field cannot be empty or less than 3 chars"),
  body("price")
    .isFloat({ min: 10, max: 2000 })
    .withMessage("Real price field must be a number"),
  body("oldPrice")
    .isFloat({ min: 10, max: 2000 })
    .withMessage("Old price field must be a number"),
  body("category")
    .isString()
    .isLength({ min: 2 })
    .custom((value) => categories.includes(value))
    .withMessage("Invalid category!"),
  body("filterItems")
    .isArray({ min: 1 })
    .withMessage("No value included in array")
    .custom((values) => values.every((item) => categories.includes(item)))
    .withMessage("Invalid values included in filter items"),
  body("colors")
    .isArray({ min: 1 })
    .withMessage("No value included in array")
    .custom((values) => values.every((item) => item.startsWith("#")))
    .withMessage("Invalid colors!"),
  body("content")
    .isString()
    .isLength({ min: 100 })
    .withMessage("Content length is too short"),
  body("description")
    .isString()
    .isLength({ min: 100 })
    .withMessage("Description length is too short"),
  body("shippingFees").isNumeric({min: 10, max: 40}),
  (req, res, next) => {
    validationResult(req).throw();
    next();
  },
];


const validateUpdateProduct = [
  body("name")
    .isString()
    .isLength({ min: 5 })
    .withMessage("Name field cannot be empty or less than 10 chars"),
  body("productNumber")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Product Number field cannot be empty or less than 3 chars"),
  body("price")
    .isFloat({ min: 10, max: 2000 })
    .withMessage("Real price field must be a number"),
  body("oldPrice")
    .isFloat({ min: 10, max: 2000 })
    .withMessage("Old price field must be a number"),
  body("category")
    .isString()
    .isLength({ min: 2 })
    .custom((value) => categories.includes(value))
    .withMessage("Invalid category!"),
  body("filterItems")
    .isArray({ min: 1 })
    .withMessage("No value included in array")
    .custom((values) => values.every((item) => categories.includes(item)))
    .withMessage("Invalid values included in filter items"),
  body("colors")
    .isArray({ min: 1 })
    .withMessage("No value included in array")
    .custom((values) => values.every((item) => item.startsWith("#")))
    .withMessage("Invalid colors!"),
  body("content")
    .isString()
    .isLength({ min: 100 })
    .withMessage("Content length is too short"),
  body("description")
    .isString()
    .isLength({ min: 100 })
    .withMessage("Description length is too short"),
  (req, res, next) => {
    validationResult(req).throw();
    next();
  },
];

const validateParams = [
  param("id").isMongoId(),
  (req, res, next) => {
    validationResult(req).throw();
    next();
  }
]

const validateCreateUser = [
  body("firstName").isString().notEmpty(),
  body("lastName").isString().notEmpty(),
  body("email").isEmail(),
  body("password").isString().notEmpty(),
  body("phoneNumber").isMobilePhone(),
  (req, res, next) => {
    validationResult(req).throw();
    next();
  },
];

const validateLoginUser = [
  body("email").isEmail(),
  body("password").isString().notEmpty(),
  (req, res, next) => {
    validationResult(req).throw();
    next()
  }
]

const validateCreateReview = [
  body("title").isString().notEmpty(),
  body("rating").isNumeric({min: 1, max: 5}),
  body("comment").isString().notEmpty(),
  body("user").isMongoId(),
  body("product").isMongoId(),
  (req, res, next) => {
    validationResult(req).throw();
    next();
  }
]

const validateVerifyEmail = [
  body("email").isEmail(),
  body("verificationToken").isString().notEmpty(),
  (req, res, next) => {
    validationResult(req).throw();
    next()
  }
]

const validateCreateOrder = [
  body('items.*.name').isString(),
  body('items.*.amount').isInt(),
  body('items.*.price').isFloat(),
  body('items.*.id').isMongoId(),
  body('items.*.image').isURL(),
  body('items.*.colors').isArray(),
  body('items.*.subtotal').isFloat(),
  body('shippingFees').isFloat(),
  body('discount').isInt({min: 0, max: 50}),
  (req, res, next) => {
    validationResult(req).throw()
    next()
  }
]

module.exports = {
    validateCreateProduct,
    validateUpdateProduct,
    validateParams,
    validateCreateUser,
    validateLoginUser,
    validateCreateReview,
    validateVerifyEmail,
    validateCreateOrder,
}