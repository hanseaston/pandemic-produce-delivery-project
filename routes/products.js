const express = require("express");
const router = express.Router();

const Product = require("../model/productModel");

router.post("/", function (req, res) {
  const {
    produceName,
    produceType,
    producePrice,
    produceImage,
    produceDesp,
  } = req.body;

  const newProduct = new Product({
    name: produceName,
    type: produceType,
    price: producePrice,
    imageUrl: produceImage,
    description: produceDesp,
  });

  newProduct
    .save()
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.get("/", function (req, res) {
  Product.find()
    .lean()
    .exec((err, products) => {
      if (err) throw err;
      return res.status(201).send(JSON.stringify(products));
    });
});

module.exports = router;
