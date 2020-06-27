/**
 * This class handles all of the admin-related requests
 */

// Imports
const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

// An array of products to be stored
// Right now, it is just a variable, will use files or databases
// To store them later
const products = [];

// getting the add project page with the form
// use the HTML template to dynamically render HTML pages
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
});

// Keeping track of the new product information and redict
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// Exports
exports.routes = router;
exports.products = products;
