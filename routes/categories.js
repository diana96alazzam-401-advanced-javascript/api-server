'use strict';

const express = require('express');
const categoriesModel = require('../lib/models/categories/categories.collection.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');

const router = express.Router();

router.post('/categories', timestamp, logger, addCategory);
router.get('/categories', timestamp, logger, getCategories);
router.get('/categories/:category_id', timestamp, logger, getCategory);
router.put('/categories/:category_id', timestamp, logger, editCategory);
router.patch('/categories/:category_id', timestamp, logger, editCategory);
router.delete('/categories/:category_id', timestamp, logger, deleteCategory);

function addCategory (req, res, next) {
  categoriesModel.create(req.body).then(data=> res.json(data))
    .catch(next);
}
function getCategories (req, res, next) {
  categoriesModel.get().then((data)=> res.json(data))
    .catch((err)=> next(err.message));    
}
function getCategory (req, res, next) {
  categoriesModel.get(req.params.category_id).then((data)=> res.json(data))
    .catch(next);    
}
function editCategory (req, res, next) {
  categoriesModel.update(req.params.category_id, req.body).then(data=> res.json(data))
    .catch(next);    
}
function deleteCategory (req, res, next) {
  categoriesModel.delete(req.params.category_id).then(data=> res.json(data))
    .catch(next);  
}

module.exports = router;