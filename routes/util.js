const express = require("express");
const router = express.Router();
const Product = require("../model/productModel");
var fs = require("fs");

router.get("/convertProductsToJson", (req, res, next) => {
  var dir = "../hans";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.writeFile("../util/products.json", "testing", (success, failure) => {});
    creatingFile
      .then(() => console.log("succeeded!"))
      .catch(() => {
        console.log("err!");
      });
    console.log(creatingFile);
    res.status(201).send();
  } else {
    console.log("directory /utils already exists");
    res
      .status(400)
      .send(new Error("directory util already created, cannot proceed"));
  }
});

module.exports = router;
