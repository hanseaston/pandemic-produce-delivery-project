/**
 * This controller class handles all of the product logics
 */

// Imports
const Product = require("../models/product");

// Display the original index page
exports.getDisplayIndexPage = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

// Display the product page with all the products added
exports.getDisplayProductPage = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => console.log(err));
};

// Display a product's detail
exports.getDisplayProductDetail = (req, res, next) => {
  const id = req.params.productId;
  Product.findProductById(id)
    .then((product) => {
      console.log(product);
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

// Display the cart page
exports.getDisplayCartPage = (req, res, next) => {
  req.user
    .getCart()
    .then((products) => {
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: products,
      });
    })
    .catch((err) => console.log(err));
};

// Adding a product to the cart
exports.postCartPage = (req, res, next) => {
  Product.findProductById(req.body.productId)
    .then((product) => {
      req.user.addToCart(product).then(() => res.redirect("/cart"));
    })
    .catch((err) => console.log(err));
};

// // Deleting a product from the cart page
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .deleteItemFromCart(prodId)
    .then((result) => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then((result) => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then((orders) => {
      res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders",
        orders: orders,
      });
    })
    .catch((err) => console.log(err));
};
