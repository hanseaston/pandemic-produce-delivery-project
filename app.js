/**
 * @class
 * Library imports
 */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * Configs files for private information
 */
if (process.env.NODE_ENV !== "production") {
  const config = require("dotenv").config();
}

/**
 * Connecting to Moogse database
 */
mongoose.connect(process.env.mongooseConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize the app and port
const app = express();
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://seattle-produce-delivery.herokuapp.com",
    changeOrigin: true,
  })
);
const port = process.env.PORT || 5000;

mongoose.connect(process.env.mongooseConnection, function (err, res) {
  if (err) {
    console.log(
      "ERROR connecting to: " + process.env.mongooseConnection + ". " + err
    );
  } else {
    console.log("Succeeded connected to: " + process.env.mongooseConnection);
  }
});

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
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

/**
 * Router imports
 */
const productRouter = require("./routes/products");
const paymentRouter = require("./routes/payment");
const checkoutRouter = require("./routes/checkout");

/**
 * Router for handling backend endpoint requests
 */
app.use("/products", productRouter);
app.use("/payment", paymentRouter);
app.use("/checkout", checkoutRouter);

/**
 * Finally listening to the port
 */
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
