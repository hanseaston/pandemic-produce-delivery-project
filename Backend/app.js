/**
 * @class
 * Library imports
 */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

/**
 * Router imports
 */
const productRouter = require("./routes/products");

/**
 * Configs files for private information
 */
const config = require("dotenv").config();
if (config.error) throw error;

// Initialize the app
const app = express();

/**
 * Using libarary imports on the app
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * Production dependency for frontend connection
 */
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(paths.join(__dirname, "..", "Frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(paths.join(__dirname, "..", "Frontend/build", "index.html"));
  });
}

/**
 * Rourter for handling backend endpoint requests
 */
app.use("/products", productRouter);

/**
 * Export modules to be used in the bin file
 */
module.exports = app;
