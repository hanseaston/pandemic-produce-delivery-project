/**
 * This model class stores information about a single product
 */

// Imports
const rootPath = require("../util/path");
const path = require("path");
const fs = require("fs");
const { charAt } = require("../util/path");
const { createBrotliCompress } = require("zlib");

// Helper method to fetch products data
const fetchFileDataHelper = (callback) => {
  const p = path.join(rootPath, "data", "products.json");
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
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id = Math.random().toString();
  }

  // Saving the product
  saveProduct() {
    fetchFileDataHelper((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("encountering error when writing file");
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
