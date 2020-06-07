'use strict';

/**
 * logger middle ware module which logs the request method, path and timestamp 
 * @module logger
 */

module.exports = (req, res, next) => {
  console.log('Request - ','method:', req.method, ' - request path:', req.path, ' - request timestamp:', req.requestTime);
  next();
};
