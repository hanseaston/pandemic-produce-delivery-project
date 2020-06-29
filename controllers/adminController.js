// Imports
const Product = require("../models/product");

// Getting add product page
exports.getAddProductPage = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
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

// Getting edit product page
exports.getEditProductPage = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode === "false") return res.redirect("/");
  Product.findProductById(req.params.productId, (product) => {
    console.log("product is ", product);
    if (!product) return res.redirect("/");
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: true,
      product: product,
    });
  });
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
