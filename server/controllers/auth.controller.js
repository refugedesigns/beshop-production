const asyncHandler = require("express-async-handler");
const passport = require("passport");
const { StatusCodes } = require("http-status-codes");

const register = asyncHandler(async (req, res) => {
  if (req.user) {
    res
      .status(StatusCodes.CREATED)
      .json({
        msg: "Success! Please check your email and verify your account.",
      });
  }
  res.send("Register route");
});

// const passportLocalLogin = asyncHandler((req, res, next) => {
//   return passport.authenticate("local-login", function (err, user) {
//     console.log("I am here");
//     console.log(user);
//     if (err) return next(err);
//     next(user);
//   })(req, res, next);
// });

const login = asyncHandler(async (req, res) => {
  if(req.user) {
    console.log(req.user)
  }

  res.status(StatusCodes.OK).json({ msg: "Signin successful" });
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
