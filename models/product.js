/**
 * This model class stores information about a single product
 */

const products = [];

module.exports = class Product {
  // Constructor, passing in the title
  constructor(title) {
    this.title = title;
  }

  // Saving the product
  saveProduct() {
    products.push(this);
  }

  // Static method, fetch all products
  static fetchAll() {
    return products;
  }
};
