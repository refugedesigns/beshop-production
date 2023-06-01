const { Router } = require("express")
const passport = require("passport");
const {
  validateCreateUser,
  validateLoginUser,
  validateVerifyEmail,
  validateForgotPassword,
  validateResetPassword,
} = require("../middlewares");
const { register, login, verifyEmail, forgotPassword, resetPassword } = require("../controllers");

const router = Router();

router
  .route("/register")
  .post(validateCreateUser, passport.authenticate("local-signup"), register);
router
  .route("/login")
  .post(validateLoginUser, passport.authenticate("local-login", {failWithError: true, failureMessage: true}), login);

router.route("/verify-email").post(validateVerifyEmail, verifyEmail)
router.route("/forgot-password").post(validateForgotPassword, forgotPassword);
router.route("/reset-password").post(validateResetPassword,resetPassword);

module.exports = router