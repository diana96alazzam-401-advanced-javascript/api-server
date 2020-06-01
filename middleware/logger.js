'use strict';
module.exports = (req, res, next) => {
  console.log('Request - ','method:', req.method, ' - request path:', req.path, ' - request timestamp:', req.requestTime);
  next();
};
