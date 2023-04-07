const BadRequestError  = require("./bad-request")
const NotFoundError  = require("./not-found")
const UnauthorizedError  = require("./unauthorized")
const CustomAPIError  = require("./error-class")
const UnauthenticatedError  = require("./unauthenticated")

module.exports = {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    UnauthenticatedError,
    CustomAPIError
}