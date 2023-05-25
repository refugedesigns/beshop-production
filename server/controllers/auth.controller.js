const asyncHandler = require("express-async-handler");
const User = require("../models/user.model")
const crypto = require("crypto");
const { StatusCodes } = require("http-status-codes");
const createUserToken = require("../utils/createUserToken");
const sendVerificationEmail = require("../utils/sendVerificationEmail");
const {
  attachAccessToken,
  attachRefreshToken,
  createHash,
} = require("../utils");
const { UnauthenticatedError } = require("../errors");
const sendResetPasswordEmail = require("../utils/sendResetPasswordEmails");

const register = asyncHandler(async (req, res) => {
  if (req.user) {
    const origin = "http://localhost:3000";
    await sendVerificationEmail({ origin, user: req.user });
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
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Verification Failed");
  }

  if (user.verificationToken !== verificationToken) {
    throw new UnauthenticatedError("Verification Failed");
  }

  user.isVerified = true;
  user.verifiedDate = Date.now();
  user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email verified successfully!" });
};
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await User.findOne({ email });

  if (user) {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    const origin = "http://localhost:3000";
    await sendResetPasswordEmail({ origin, user, passwordToken });
    const tenMinutes = 1000 * 60 * 10;
    const passworkTokenExpiration = new Date(Date.now() + tenMinutes);

    user.resetPasswordToken = createHash(passwordToken);
    user.resetPasswordTokenExpiration = passworkTokenExpiration;

    await user.save();
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Please check your email for reset password link" });
};
const resetPassword = async (req, res) => {
  const { email, password, token } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const currentDate = new Date();

    if (user.resetPasswordToken !== createHash(token)) {
      throw new UnauthenticatedError("Authentication Invalid!");
    }

    if (user.resetPasswordTokenExpiration < currentDate) {
      throw new UnauthenticatedError("Sorry your link expired!");
    }

    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordTokenExpiration = null;

    await user.save();
    return res
      .status(StatusCodes.OK)
      .json({ msg: "Success! Please login with your new password" });
  }
  throw UnauthenticatedError("Authentication Invalid")
};

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
