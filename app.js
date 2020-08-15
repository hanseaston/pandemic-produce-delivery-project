/**
 * @class
 * Library imports
 */
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/**
 * Router imports
 */
const productRouter = require("./routes/products");
const paymentRouter = require("./routes/payment");
const checkoutRouter = require("./routes/checkout");

// Initialize the app and port
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  const config = require("dotenv").config();
}

/**
 * Connecting to Mongoose database
 */
mongoose.connect(
  process.env.mongooseConnection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, res) {
    if (err) {
      console.log(
        "ERROR connecting to: " + process.env.mongooseConnection + ". " + err
      );
    } else {
      console.log("Succeeded connected to: " + process.env.mongooseConnection);
    }
  }
);

/**
 * Router for handling backend endpoint requests
 */

app.use("/api/products", productRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/checkout", checkoutRouter);

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
 * Finally listening to the port
 */
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
