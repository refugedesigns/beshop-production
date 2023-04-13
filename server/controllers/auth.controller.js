const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const createUserToken = require("../utils/createUserToken");
const { attachAccessToken, attachRefreshToken } = require("../utils");
const { UnauthenticatedError } = require("../errors");

const register = asyncHandler(async (req, res) => {
  if (req.user) {
    res.status(StatusCodes.CREATED).json({
      msg: "Success! Please check your email and verify your account.",
    });
  }
});

const login = asyncHandler(async (req, res) => {
  if (req.user) {
    const userToken = createUserToken(req.user);

    attachRefreshToken({
      res,
      user: userToken,
      refreshToken: req.user.refreshToken,
    });
    attachAccessToken({ res, user: userToken });

    delete req.user.refreshToken;

    res.status(StatusCodes.OK).json({ user: req.user });
  }
});
const logout = async (req, res) => {
  res.send("Logout route");
};
const verifyEmail = async (req, res) => {
  res.send("Verify email route");
};
const forgotPassword = async (req, res) => {
  res.send("Forgot password route");
};
const resetPassword = async (req, res) => {
  res.send("Register route");
};

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
