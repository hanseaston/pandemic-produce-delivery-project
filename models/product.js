/**
 * This model class stores information about a single product
 */

// Imports
const rootPath = require("../util/path");
const path = require("path");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// module.exports = class Product {
//   // Constructor, passing in the title
//   constructor(title, price, description, imageUrl, id, usrId) {
//     this._id = id ? new MongoDb.ObjectId(id) : null;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//     this.usrId = usrId;
//   }

//   // Saving the product
//   saveProduct() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       // Update the product
//       dbOp = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {})
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   // Fetching all of the products from the database
//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   // Finding a product by its id
//   static findProductById(id) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find({ _id: new MongoDb.ObjectId(id) })
//       .next()
//       .then((product) => {
//         return product;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   // Deleting the product with the certain id
//   static deleteProductById(id) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .deleteOne({ _id: new MongoDb.ObjectId(id) })
//       .then((result) => {})
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };
