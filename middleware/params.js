'use strict';

const categoriesModel = require('../lib/models/categories/categories.collection.js');
const productsModel = require('../lib/models/products/products.collection');

function getModel(req, res, next) { 
  const model = req.params.model;
  switch (model){
  case 'categories':
    req.model = categoriesModel;
    next();
    return;
  case 'products':
    req.model = productsModel;
    next();
    return;
  default: 
    next('invalid model');
    return;
  }
}

module.exports = getModel;