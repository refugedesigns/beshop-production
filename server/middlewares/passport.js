const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const { User } = require("../models");
const { UnauthenticatedError, BadRequestError } = require("../errors");

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      const { firstName, lastName, phoneNumber } = req.body;
      process.nextTick(async () => {
        const user = await User.findOne({ email });

        const role =
          (await User.countDocuments()) === 0 ? "admin" : "user";

        if (user) {
          throw new BadRequestError("Email already exists.");
        }

        const newUser = await User.create({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          role
        });

        return done(null, newUser);
      });
    }
  )
);
