'use strict';
const express = require('express');
const getModel = require('../middleware/params.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');

const router = express.Router();
router.param('model', getModel);
router.get('/:model', timestamp, logger, getAllhandler);
router.get('/:model/:id', timestamp, logger, getOneHandler);
router.post('/:model', timestamp, logger, postHandler);
router.put('/:model/:id', timestamp, logger, editHandler);
router.patch('/:model/:id', timestamp, logger, editHandler);
router.delete('/:model/:id', timestamp, logger, deleteHandler);


function getAllhandler(req, res, next) {
  req.model.get().then((data)=> res.json(data))
    .catch((err)=> next(err.message));   
}
function getOneHandler(req, res, next) {
  req.model.get(req.params.id).then((data)=> res.json(data))
    .catch(next); 
}
function postHandler(req, res, next) {
  req.model.create(req.body).then(data=> res.json(data))
    .catch(next);

}
function editHandler(req, res, next) {
  req.model.update(req.params.id, req.body).then(data=> res.json(data))
    .catch(next); 
}
function deleteHandler(req, res, next) {
  req.model.delete(req.params.id).then(data=> res.json(data))
    .catch(next);  
}

module.exports = router;