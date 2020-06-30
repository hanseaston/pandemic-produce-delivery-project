/**
 * This model class stores information about a single product
 */

// Imports
const rootPath = require("../util/path");
const path = require("path");
const fs = require("fs");
const p = path.join(rootPath, "data", "products.json");
const Cart = require("./cart");

// Helper method to fetch products data
const fetchFileDataHelper = (callback) => {
  fs.readFile(p, (err, content) => {
    if (!err) {
      callback(JSON.parse(content));
      return;
    }
    callback([]);
  });
};

module.exports = class Product {
  // Constructor, passing in the title
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // Saving the product
  saveProduct() {
    fetchFileDataHelper((products) => {
      // If id already exists, then we are replacing a certain product
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  // Deleting a certain product from the cart as well as the admin page
  static deleteProduct(id) {
    fetchFileDataHelper((products) => {
      const product = products.find((prod) => prod.id === id);
      const updatedProducts = products.filter((prod) => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  // Static method, fetch all products
  static fetchAll(callback) {
    fetchFileDataHelper(callback);
  }

  // Find and return the product associated with the id
  static findProductById(id, callback) {
    fetchFileDataHelper((products) => {
      console.log("products", products, "id passed in ", id);
      const product = products.find((p) => p.id === id);
      console.log(product);
      callback(product);
    });
  }
};
