'use strict';
const categoriesSchema = require('./categories.schema.js');
const Model = require('../mongo.js');

class CategoriesModel extends Model {
  constructor() {
    super(categoriesSchema);
  }
}

module.exports = new CategoriesModel(categoriesSchema);