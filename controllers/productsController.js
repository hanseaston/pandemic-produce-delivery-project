/**
 * This controller class handles all of the product logics
 */

// Imports
const Product = require("../models/product");

exports.getAddProductPage = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postProductAndRedirect = (req, res, next) => {
  const newProduct = new Product(req.body.title);
  newProduct.saveProduct(this);
  res.redirect("/");
};

exports.getDisplayProductPage = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
