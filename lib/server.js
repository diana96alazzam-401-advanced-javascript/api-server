'use strict';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const categoriesRouter = require('../routes/categories.js');
const productsRouter = require('../routes/product.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(timestamp);
app.use(logger);
app.use(categoriesRouter);
app.use(productsRouter);
app.use('*', timestamp, notFound, logger);
app.use(serverError);


module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`The server is running on port ${PORT}`));
  },
};