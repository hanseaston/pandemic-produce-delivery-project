// Imports
const Product = require("../models/product");

// Getting add product page
exports.getAddProductPage = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

// Handling the post request and redirecting to the main shop page
exports.postProductAndRedirect = (req, res, next) => {
  const newProduct = new Product(req.body.title);
  newProduct.saveProduct(this);
  res.redirect("/");
};

// Display the product page for admins
exports.getDisplayProductPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/admin-product", {
      prods: products,
      pageTitle: "Admin-products",
      path: "/admin-products",
      hasProducts: products.length > 0,
    });
  });
};
