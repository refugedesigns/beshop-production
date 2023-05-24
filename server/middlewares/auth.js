const asyncHandler = require("express-async-handler");
const { isValidToken, attachAccessToken } = require("../utils");
const { UnauthenticatedError } = require("../errors");
const Token = require("../models/token.model");
const createUserToken = require("../utils/createUserToken");

const authenticateUser = asyncHandler(async(req, res, next) => {
    const { refreshToken, accessToken } = req.signedCookies;
    if(accessToken) {
        const payload = isValidToken(accessToken) 
        console.log(payload)
        if(payload.user.id) {
            req.user = {
              _id: payload.user.id,
              role: payload.user.role,
              email: payload.user.email
            }
            return next();
        }
    }else if(refreshToken) {
      const payload = isValidToken(refreshToken);
      if (!payload) {
        throw new UnauthenticatedError("Authentication Invalid");
      }
      console.log("Refresh Token:", payload)
      const existingToken = await Token.findOne({
        user: payload.user.id,
        refreshToken: payload.refreshToken,
      });

      if (!existingToken || !existingToken.isValid) {
        throw new UnauthenticatedError("Authentication Invalid");
      }

      attachAccessToken({ res, user: payload.user });
      req.user = {
        _id: payload.user.id,
        role: payload.user.role,
        email: payload.user.email,
      };
      next();
    }else {
        throw new UnauthenticatedError("Session timeout, please login first");
    }

})

module.exports = authenticateUser
