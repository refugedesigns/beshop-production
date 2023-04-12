const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const { User } = require("../models");
const {
  UnauthenticatedError,
  BadRequestError,
  NotFoundError,
} = require("../errors");

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

        const role = (await User.countDocuments()) === 0 ? "admin" : "user";

        if (user) {
          return done(new BadRequestError("Email already exists."));
        }

        let newUser = await User.create({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          role,
        });

        newUser = newUser._doc 

        delete newUser.password

        return done(null, newUser);
      });
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) { 
    process.nextTick(async () => {
      try {
        let user = await User.findOne({ email });

        if (!user) {
          return done(new UnauthenticatedError("Invalid Credentials"));
        }

        const passwordMatch = await user.comparePassword(password);

        if (!passwordMatch) {
          return done(new UnauthenticatedError("Invalid Credentials"));
        }

        user = user._doc;

        delete user.password;

        return done(null, user);
      } catch (error) {

        done(error)
      }
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});
