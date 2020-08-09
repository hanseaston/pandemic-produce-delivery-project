/**
 * @class
 * Library imports
 */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

/**
 * Configs files for private information
 */
const config = require("dotenv").config();
if (config.error) throw config.error;

/**
 * Connecting to Moogse database
 */
mongoose.connect(process.env.mongooseConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("MongoDB connected");
});

/**
 * Router imports
 */
const productRouter = require("./routes/products");
const paymentRouter = require("./routes/payment");
const checkoutRouter = require("./routes/checkout");

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
  app.use(express.static(paths.join(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(paths.join(__dirname, "..", "build", "index.html"));
  });
}

/**
 * Rourter for handling backend endpoint requests
 */
app.use("/products", productRouter);
app.use("/payment", paymentRouter);
app.use("/checkout", checkoutRouter);

/**
 * Export modules to be used in the bin file
 */
module.exports = app;
