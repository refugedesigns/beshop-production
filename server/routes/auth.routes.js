const { Router } = require("express")
const passport = require("passport");
const { validateCreateUser, validateLoginUser } = require("../middlewares");
const { register, login, verifyEmail } = require("../controllers");

const router = Router();

router
  .route("/register")
  .post(validateCreateUser, passport.authenticate("local-signup"), register);
router
  .route("/login")
  .post(validateLoginUser, passport.authenticate("local-login", {failWithError: true, failureMessage: true}), login);

router.route("/verify-email").post(verifyEmail)

module.exports = router