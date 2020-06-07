'use strict';
const productsSchema = require('./products.schema.js');
const Model = require('../mongo.js');

/**
 * Products Model module 
 * @module productsCollection
 */

/**
 * Class ProductsModel extends the Model class from model module and pass the products schema
 * @extends Model
 *   
 */

class ProductsModel extends Model {
  constructor() {
    super(productsSchema);
  }
}

module.exports = new ProductsModel(productsSchema);