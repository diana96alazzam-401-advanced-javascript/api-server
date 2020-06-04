'use strict';

const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('sever', () => {
  it('1- should respond with 200 on /categories', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('2- should respond with 404 on an invalid route', () => {
    return mockRequest.get('/invalid').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('3- should respond with 200 when getting from this dynamic route /categories/category_id', () => {
    return mockRequest.get('/categories/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('4- should respond with 200 on posting to this route /categories', () => {
    return mockRequest.post('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('5- should respond with 404 on posting to an invalid route', () => {
    return mockRequest.post('/invalid').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('6- should respond with 200 on editing on this dynamic route /categories/:category_id', () => {
    return mockRequest.put('/categories/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('7- should respond with 404 on editing on an invalid route', () => {
    return mockRequest.put('/invalid').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('8- should respond with 404 on partial editing on an invalid route', () => {
    return mockRequest.patch('/invalid').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('9- should respond with 200 on deleteing with this dynamic route /categories/:category_id', () => {
    return mockRequest.delete('/categories/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('10- should respond with 404 on deleting on an invalid route', () => {
    return mockRequest.delete('/invalid').then((results) => {
      expect(results.status).toBe(404);
    });
  });

  // products

  it('11- should respond with 200 on /products', () => {
    return mockRequest.get('/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('12- should respond with 200 when getting from this dynamic route /products/product_id', () => {
    return mockRequest.get('/products/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('13- should respond with 200 on posting to this route /products', () => {
    return mockRequest.post('/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('14- should respond with 200 on editing on this dynamic route /products/:category_id', () => {
    return mockRequest.put('/products/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('15- should respond with 200 on partial editing on this dynamic route /products/:category_id', () => {
    return mockRequest.patch('/products/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('16- should respond with 200 on deleteing with this dynamic route /products/:category_id', () => {
    return mockRequest.delete('/products/0').then((results) => {
      expect(results.status).toBe(200);
    });
  });
});
  