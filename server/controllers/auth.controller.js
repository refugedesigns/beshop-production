const asyncHandler = require("express-async-handler");
const User = require("../models/user.model")
const { StatusCodes } = require("http-status-codes");
const createUserToken = require("../utils/createUserToken");
const sendVerificationEmail = require("../utils/sendVerificationEmail");
const { attachAccessToken, attachRefreshToken } = require("../utils");
const { UnauthenticatedError, NotFoundError } = require("../errors");

const register = asyncHandler(async (req, res) => {
  if (req.user) {
    const origin = "http://localhost:3000"
    await sendVerificationEmail({origin, user: req.user})
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
  const {verificationToken, email} = req.body;
  const user = await User.findOne({ email });
  if(!user) {
    throw new UnauthenticatedError("Verification Failed")
  }

  if(user.verificationToken !== verificationToken) {
    throw new UnauthenticatedError("Verification Failed")
  }

  user.isVerified = true;
  user.verifiedDate = Date.now();
  user.verificationToken = ""

  await user.save();

  res.status(StatusCodes.OK).json({msg: "Email verified successfully!"});
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
