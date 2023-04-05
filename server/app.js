require("express-async-errors")
require("dotenv").config()
const http = require("http")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const cookieSession = require("cookie-session")
const logger = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const xxsClean = require("xss-clean")
const passport = require("passport")
const { json, urlencoded} = express
const {join} = path

const notFoundMiddleware = require("./middlewares/not-found")
const errorHandlerMiddleware = require("./middlewares/error-handler")

const app = express();
const server = http.createServer(app);

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message:
    "Too many requests from this IP, please try again after an hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//Security settings
app.use(helmet());
app.use(xxsClean())
app.use(apiLimiter)
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEYS],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

//Swagger documentation
//Add api routes here

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };