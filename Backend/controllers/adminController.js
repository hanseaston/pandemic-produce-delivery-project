/**
 * Controller handling all admin related requests
 * @module
 */

/** Imports */
const Product = require("../models/product");

// Getting add product page
exports.getAddProductPage = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
    isAuthenticated: req.session.isLoggedIn,
  });
};

/** Handling the post request and redirecting to the main shop page */
exports.postProductAndRedirect = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const newProduct = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
  });
  newProduct
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

/** Posting the updated changes of the product and redirect to the main admin page */
exports.updateAdmindProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(() => {
      res.redirect("/admin/admin-products");
    })
    .catch((err) => console.log(err));
};

/** Getting edit product page */
exports.getEditProductPage = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode === "false") return res.redirect("/");
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) return res.redirect("/");
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: true,
        product: product,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

/** Display the product page for admins */
exports.getDisplayProductPage = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/admin-products", {
        prods: products,
        pageTitle: "Admin products",
        path: "/admin/admin-products",
        hasProducts: products.length > 0,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

/** Post request after a product has been deleted */
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      res.redirect("/admin/admin-products");
    })
    .catch((err) => console.log(err));
};
