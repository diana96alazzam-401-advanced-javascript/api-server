'use strict';
const productsSchema = require('./products.schema.js');
const Model = require('../mongo.js');

class ProductsModel extends Model {
  constructor() {
    super(productsSchema);
  }
}

module.exports = new ProductsModel(productsSchema);