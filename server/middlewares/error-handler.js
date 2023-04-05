const errorHandlerMiddleware = (err, req, res, next) => {
    const customError = {
      statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
      msg: err.message || "Something went wrong try again later",
    };
    return res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware