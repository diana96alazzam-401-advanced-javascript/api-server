'use strict';

/**
 * Modular Model module 
 * @module mongoModel
 */

/** Class representing the mongo db methods. */
class Model {
  /**
    * Create a Modle.
    * @param schema 
  */
  constructor(schema) {
    this.schema = schema;
  }
  /** Method to get from db with or without id */
  get(_id) {
    const queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }
  /** Method to create a new record and save it to the db */
  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }
  /** Method to find a record in db using id and update it */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }
  /** Method to find a record in db using id and delete it */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;