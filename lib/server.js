'use strict';
require('dotenv').config();

const express = require('express');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');

const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);

let dbProducts = [];

app.post('/products', timestamp, (req, res) => {
  const {category, name, display_name, description} = req.body;
  const record = {category, name, display_name, description};
  dbProducts.push(record);
  res.json(record);
});

app.get('/products', timestamp, logger, (req, res) => {
  const count = dbProducts.length;
  const results = dbProducts;
  res.json({count, results});
});

app.get('/products/:product_id', timestamp, logger, (req, res) => {
  const idx = req.params.product_id;
  res.json(dbProducts[idx]);
});

app.put('/products/:product_id', timestamp, logger, (req, res) => {
  const {category, name, display_name, description} = req.body;
  const record = {category, name, display_name, description};
  const idx = req.params.product_id;
  dbProducts[idx] = record;
  res.json(dbProducts[idx]);
});

app.patch('/products/:product_id', timestamp, logger, (req, res) => {
  const {category, name, display_name, description} = req.body;
  const partialRecord = {category, name, display_name, description};
  const idx = req.params.product_id;
  dbProducts[idx] = partialRecord;
  res.json(dbProducts[idx]);
});

app.delete('/products/:product_id', timestamp, logger, (req, res) => {
  const idx = req.params.product_id;
  dbProducts.splice(idx, 1);
  res.json('Deleted product');

});

let dbCategories = [];

app.post('/categories', timestamp, logger, (req, res) => {
  const {name, display_name, description} = req.body;
  const record = {name, display_name, description};
  dbCategories.push(record);
  res.json(record);
});

app.get('/categories', timestamp, logger, (req, res) => {
  const count = dbCategories.length;
  const results = dbCategories;
  res.json({count, results});
});

app.get('/categories/:category_id', timestamp, logger, (req, res) => {
  const idx = req.params.category_id;
  res.json(dbCategories[idx]);
});

app.put('/categories/:category_id', timestamp, logger, (req, res) => {
  const {name, display_name, description} = req.body;
  const record = {name, display_name, description};
  const idx = req.params.category_id;
  dbCategories[idx] = record;
  res.json(dbCategories[idx]);
});

app.patch('/categories/:category_id', timestamp, logger, (req, res) => {
  const {name, display_name, description} = req.body;
  const partialRecord = {name, display_name, description};
  const idx = req.params.product_id;
  dbProducts[idx] = partialRecord;
  res.json(dbProducts[idx]);
});

app.delete('/categories/:category_id', timestamp, logger, (req, res) => {
  const idx = req.params.category_id;
  dbCategories.splice(idx, 1);
  res.json('Deleted category');

});


app.use('*', timestamp, notFound, logger);
app.use(serverError);


module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`The server is running on port ${PORT}`));
  },
};