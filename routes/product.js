'use strict';

const express = require('express');
const productsModel = require('../lib/models/products/products.collection');

const router = express.Router();

router.post('/products', addProduct);
router.get('/products', getProducts);
router.get('/products/:product_id', getProduct);
router.put('/products/:product_id', editProduct);
router.patch('/products/:product_id', editProduct);
router.delete('/products/:product_id', deleteProduct);

function addProduct(req, res, next) {
  productsModel.create(req.body).then(data => res.json(data))
    .catch(next);
}
function getProducts(req, res, next) {
  productsModel.get().then((data) => res.json(data))
    .catch((err) => next(err.message));
}
function getProduct(req, res, next) {
  productsModel.get(req.params.product_id).then((data) => res.json(data))
    .catch(next);
}
function editProduct(req, res, next) {
  productsModel.update(req.params.product_id, req.body).then(data => res.json(data))
    .catch(next);
}
function deleteProduct(req, res, next) {
  productsModel.delete(req.params.product_id, req.body).then(data => res.json(data))
    .catch(next);
}

module.exports = router;