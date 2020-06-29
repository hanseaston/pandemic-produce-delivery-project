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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const newProduct = new Product(title, imageUrl, description, price);
  newProduct.saveProduct(this);
  res.redirect("/");
};

// Display the product page for admins
exports.getDisplayProductPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/admin-products", {
      prods: products,
      pageTitle: "Admin-products",
      path: "/admin-products",
      hasProducts: products.length > 0,
    });
  });
};
