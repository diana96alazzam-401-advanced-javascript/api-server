'use strict';

const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('API', () => {
  it('post() on route /api/v1/categories', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObject)
      .then((data) => {
        const record = data.body;
        Object.keys(categoryObject).forEach((key) => {
          expect(record[key]).toEqual(categoryObject[key]);
        });
      });
  });
  it('get() with route /api/v1/categories', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObject)
      .then((data) => {
        return mockRequest.get('/api/v1/categories').then((result) => {
          Object.keys(categoryObject).forEach((key) => {
            expect(result.body[1][key]).toEqual(categoryObject[key]);
          });
        });
      });
  });
  it('put() with route /api/v1/categories/:category_id', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    const editedCategoryObject = {
      name: 'Edited wallet',
      display_name: 'Edited Wallet',
      description: 'Edited leather collection',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObject)
      .then((data) => {
        let id = JSON.parse(data.req.res.client._httpMessage.socket._httpMessage.res.text)._id;
        return mockRequest.put('/api/v1/categories/:category_id').send(editedCategoryObject, id).then((result) => {
          
          let resultsValues = Object.values(result.request._data);
          let expectedValues = Object.values(editedCategoryObject);
          expect(resultsValues).toEqual(expectedValues);
        });
      });
  });
  it('post() on route /api/v1/products', () => {
    const productObject = {
      category: 'shoes',
      name: 'long boots',
      display_name: 'Long Boots',
      description: 'leather boots',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(productObject)
      .then((data) => {
        const record = data.body;
        Object.keys(productObject).forEach((key) => {
          expect(record[key]).toEqual(productObject[key]);
        });
      });
  });
  it('put() with route /api/v1/products/:product_id', () => {
    const productObject = {
      category: 'shoes',
      name: 'long boots',
      display_name: 'Long Boots',
      description: 'leather boots',
    };
    const editedProductObject = {
      category: 'Edited shoes',
      name: 'Edited long boots',
      display_name: 'Edited Long Boots',
      description: 'Edited leather boots',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(productObject)
      .then((data) => {
        let id = JSON.parse(data.req.res.client._httpMessage.socket._httpMessage.res.text)._id;
        return mockRequest.put('/api/v1/products/:product_id').send(editedProductObject, id).then((result) => {
          let resultsValues = Object.values(result.request._data);
          let expectedValues = Object.values(editedProductObject);
          expect(resultsValues).toEqual(expectedValues);
        });
      });
  });
  it('delete() on route /api/v1/products/:product_id', () => {
    const productObject = {
      category: 'shoes',
      name: 'long boots',
      display_name: 'Long Boots',
      description: 'leather boots',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(productObject)
      .then((data) => {
        return mockRequest.delete(`/api/v1/products/${data.body._id}`).send(productObject).then(res=> {
          expect(res.status).toBe(200);
        });
      });
  });
  it('404 error when /notfound', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    return mockRequest
      .post('/notfound')
      .send(categoryObject)
      .then((data) => {
        expect(data.status).toBe(404);
      });
  });
  it('get() with route /api/v1/categories/:category_id', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObject)
      .then((data) => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`).then((result) => {
          expect(result.status).toBe(200);
        });
      });
  });
  it('invalid model', () => {
    const productObject = {
      category: 'shoes',
      name: 'long boots',
      display_name: 'Long Boots',
      description: 'leather boots',
    };
    return mockRequest
      .post('/api/v1/invalid')
      .send(productObject)
      .then((data) => {
        expect(data.status).toBe(500);
      });
  });
});




