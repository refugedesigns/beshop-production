import CustomAPIError from "./error-class";
import {StatusCodes} from "http-status-codes"

class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.StatusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFoundError;