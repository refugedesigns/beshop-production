const crypto = require("crypto");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/user.model")
const Token = require("../models/token.model")
const robohashAvatars = require("robohash-avatars")
const _ = require("lodash");
const {
  UnauthenticatedError,
  BadRequestError,
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
        try {
          const user = await User.findOne({ email });

          const role = (await User.countDocuments()) === 0 ? "admin" : "user";

          if (user) {
            return done(new BadRequestError("Email already exists."));
          }

          const robots =  ["Kittens", "Humans", "Robots", "Monsters", "DisembodiedHeads"]

          const avatarUrl = robohashAvatars.generateAvatar({
            background: robohashAvatars.BackgroundSets.RandomBackground1,
            characters: robohashAvatars.CharacterSets[_.sample(robots)],
            height: 400,
            width: 400,
          });

          let newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            role,
            profileImage: avatarUrl
          });

          newUser = newUser._doc;

          delete newUser.password;

          return done(null, newUser);
        } catch (error) {
          done(error)
        }
      });
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    function (req, email, password, done) {
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
          delete user.resetPasswordToken;

          let refreshToken;
          const existingRefreshToken = await Token.findOne({
            user: user._id,
          });

          if (existingRefreshToken) {
            const { isValid } = existingRefreshToken;
            if (!isValid) {
              return done(new UnauthenticatedError("Invalid Credetials"));
            }
            refreshToken = existingRefreshToken.refreshToken;
            user.refreshToken = refreshToken;
          } else {
            refreshToken = crypto.randomBytes(50).toString("hex");
            const userAgent = req.get("user-agent");
            const ip = req.ip;

            await Token.create({
              refreshToken,
              ip,
              userAgent,
              user: user._id,
            });
            user.refreshToken = refreshToken;
          }
          return done(null, user);
        } catch (error) {
          done(error);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});
