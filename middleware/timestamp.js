'use strict';

/**
 * time stamp middle ware module 
 * @module timestamp
 */

module.exports = (req, res, next) => {
  req.requestTime = new Date().toLocaleDateString();
  next();
};