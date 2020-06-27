/**
 * This controller class handles all of the product logics
 */

// An array of products to be stored
// Right now, it is just a variable, will use files or databases
// To store them later
const products = [];

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
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getDisplayProductPage = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
