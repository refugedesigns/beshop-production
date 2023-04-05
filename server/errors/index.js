import BadRequestError from "./bad-request"
import NotFoundError from "./not-found"
import UnauthorizedError from "./unauthorized"
import CustomAPIError from "./error-class"
import UnauthenticatedError from "./unauthenticated"

module.exports = {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    UnauthenticatedError,
    CustomAPIError
}