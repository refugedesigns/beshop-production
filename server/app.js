require("dotenv").config();
require("express-async-errors");
const http = require("http");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xxsClean = require("xss-clean");
const passport = require("passport");
const { json, urlencoded } = express;
const { join } = path;

const { errorHandlerMiddleware, notFoundMiddleware } = require("./middlewares")

const apiRoutes = require("./routes/api");

const app = express();
const server = http.createServer(app);

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again after an hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//Security settings
app.use(helmet());
app.use(xxsClean());
app.use(apiLimiter);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "dev") {
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
app.use(cookieParser(process.env.JWT_SECRET));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "public")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}else {
  app.get("/*", (req, res) => {
    res.send("<h3>API is running</h3>")
  })
}

//Swagger documentation
//Add api routes here
app.use("/api/v1", apiRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
