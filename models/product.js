/**
 * This model class stores information about a single product
 */

// Imports
const db = require("../util/db").getDb;
const rootPath = require("../util/path");
const path = require("path");
const fs = require("fs");
const p = path.join(rootPath, "data", "products.json");
const Cart = require("./cart");
const { getDb } = require("../util/db");
const MongoDb = require("mongodb");

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
    const db = getDb();
    return db.collection("products").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findProductById(id) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new MongoDb.ObjectId(id) })
      .next()
      .then((product) => {
        return product;
      })
      .catch((err) => {
        console.log();
      });
  }
};
