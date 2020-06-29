/**
 * This model class stores information about a single product
 */

// Imports
const rootPath = require("../util/path");
const path = require("path");
const fs = require("fs");

module.exports = class Product {
  // Constructor, passing in the title
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // Saving the product
  saveProduct() {
    const p = path.join(rootPath, "data", "products.json");
    console.log("path is ", p);
    fs.readFile(p, (err, content) => {
      let products = [];
      if (!err) {
        products = JSON.parse(content);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("encountering error when writing file");
      });
    });
  }

  // Static method, fetch all products
  static fetchAll(callback) {
    const p = path.join(rootPath, "data", "products.json");
    fs.readFile(p, (err, content) => {
      if (!err) {
        callback(JSON.parse(content));
        return;
      }
      callback([]);
    });
  }
};
