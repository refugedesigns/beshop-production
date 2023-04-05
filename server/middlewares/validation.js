const { check, body, validationResult } = require("express-validator");

const categories = ["nail", "skin", "makeup", "spa", "perfume", "hair"]

const validateCreateProduct = [
  body("name")
    .isString()
    .isLength({ min: 10 })
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
  body("image")
    .isString()
    .isLength({ min: 10 })
    .withMessage("Image field must be a string"),
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
  body("imageGallery")
    .isArray({ min: 1 })
    .withMessage("No value included in array")
    .custom((values) =>
      values.every((item) => typeof item === "string" && item !== "")
    )
    .withMessage("Invalid image paths!"),
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

module.exports = {
    validateCreateProduct
}