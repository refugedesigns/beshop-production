#!/usr/bin/env node

require("dotenv").config();
require("express-async-errors");
/**
 * Module dependencies.
 */

let app = require("./app").app;
const { connectDB } = require("./utils");

/**
 * Get port from environment and store in Express
 */

let port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

/**
 * Create HTTP server
 */

let server = require("./app").server;

/**
 * Listen on provided port, on all network interfaces
 */

server.on("error", onError);
server.on("listening", onListening);

async function startServer() {
  try {
    await connectDB(process.env.MONGO_URL);
    server.listen(app.get("port"));
  } catch (error) {
    console.error(error);
  }
}

startServer();

/**
 * Normalize a port into a number, string, or false
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe" + port : "Port" + port;

  switch (error.code) {
    case "EACCESS":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe" + addr : "port " + port;

  console.log(`Listening on ${bind}`);
}
