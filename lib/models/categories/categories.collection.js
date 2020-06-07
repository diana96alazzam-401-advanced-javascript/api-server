'use strict';
const categoriesSchema = require('./categories.schema.js');
const Model = require('../mongo.js');

/**
 * Categories Model module 
 * @module categoriesCollection
 */

/**
 * Class CategoriesModel extends the Model class from model module and pass the categries schema
 * @extends Model
 *  
 */

class CategoriesModel extends Model {
  constructor() {
    super(categoriesSchema);
  }
}

module.exports = new CategoriesModel(categoriesSchema);