require("express-async-errors");
require("dotenv").config();
require("./middlewares/passport")
const http = require("http");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xxsClean = require("xss-clean");
const passport = require("passport");
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs");
const { v2: cloudinary } = require("cloudinary");
const { json, urlencoded } = express;
const { join } = path;

const { errorHandlerMiddleware, notFoundMiddleware } = require("./middlewares");

const apiRoutes = require("./routes/api");

const app = express();
const server = http.createServer(app);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.set("trust proxy", 1);
const apiLimiter = rateLimit({
  windowMs: 60 * 15 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again after an hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//Security settings
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "default-src": ["'self'"],
      "img-src": ["'self'", "https: data:"],
      "script-src": [
        "'self'",
        "'unsafe-inline'",
        "js.stripe.com",
        "www.youtube.com",
        "api.mapbox.com",
      ],
      "frame-src": [
        "'self'",
        "'unsafe-inline'",
        "js.stripe.com",
        "www.youtube.com",
      ],
      "connect-src": [
        "'self'",
        "'unsafe-inline'",
        "api.mapbox.com",
        "www.youtube.com",
        "js.stripe.com",
        "events.mapbox.com",
        "goshop-vercel.vercel.app",
      ],
      "worker-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "blob:"],
    },
  })
);

app.use(xxsClean());
app.use(mongoSanitize())
// app.use(apiLimiter);

app.use(
  cors({
    origin: ["*"],
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
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  json({
    verify: function (req, res, buf) {
      req.rawBody = buf;
    },
  })
);
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));
app.use(cookieParser(process.env.JWT_SECRET));

//Swagger documentation
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//Add api routes here
app.use("/api/v1", apiRoutes);

//Frontend routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const pathObject = {
  "shop": true,
  "shop/[prodId]": true,
  "404": true,
  "about": true,
  "cart": true,
  "categories": true,
  "contacts": true,
  "faq": true,
  "login": true,
  "signup": true,
  "reset-password": true,
  "forgot-password": true,
  "profile": true,
  "verify-email": true,
  "wishlist": true
}

app.use((req, res) =>{
  const path = req.originalUrl.split("/")[1];
  console.log(pathObject[path])
  console.log(path)
  if(pathObject[path]) {
    res.sendFile(join(__dirname, "public", `${path}.html`));
  }else {
    res.sendFile(join(__dirname, "public", "404.html"));
  }
})


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
