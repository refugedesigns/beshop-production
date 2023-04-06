const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message)
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  if (err.errors?.length > 0) {
    const fields = Array.from(
      new Set(err.errors.map((item) => item.param))
    ).join(", ");
    const isMultiple = err.errors.length > 1;
    const message = `Invalid value${isMultiple ? "s" : ""} for field${
      isMultiple ? "s" : ""
    }: ${fields}`;
    customError.msg = message;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  return res.status(customError.statusCode).json({ msg: customError.msg});
};

module.exports = errorHandlerMiddleware;
