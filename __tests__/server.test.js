'use strict';

const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('API', () => {
  it('post() on route /categories', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    return mockRequest
      .post('/categories')
      .send(categoryObject)
      .then((data) => {
        const record = data.body;
        Object.keys(categoryObject).forEach((key) => {
          expect(record[key]).toEqual(categoryObject[key]);
        });
      });
  });
  it('get() with route /categories', () => {
    const categoryObject = {
      name: 'wallet',
      display_name: 'Wallet',
      description: 'leather collection',
    };
    return mockRequest
      .post('/categories')
      .send(categoryObject)
      .then((data) => {
        return mockRequest.get('/categories').then((result) => {
          Object.keys(categoryObject).forEach((key) => {
            expect(result.body[1][key]).toEqual(categoryObject[key]);
          });
        });
      });
  });
  it('put() with route /categories/:category_id', () => {
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
      .post('/categories')
      .send(categoryObject)
      .then((data) => {
        let id = JSON.parse(data.req.res.client._httpMessage.socket._httpMessage.res.text)._id;
        return mockRequest.put('/categories/:category_id').send(editedCategoryObject, id).then((result) => {
          
          let resultsValues = Object.values(result.request._data);
          let expectedValues = Object.values(editedCategoryObject);
          expect(resultsValues).toEqual(expectedValues);
        });
      });
  });
  it('post() on route /products', () => {
    const productObject = {
      category: 'shoes',
      name: 'long boots',
      display_name: 'Long Boots',
      description: 'leather boots',
    };
    return mockRequest
      .post('/products')
      .send(productObject)
      .then((data) => {
        const record = data.body;
        Object.keys(productObject).forEach((key) => {
          expect(record[key]).toEqual(productObject[key]);
        });
      });
  });
  it('put() with route /products/:product_id', () => {
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
      .post('/products')
      .send(productObject)
      .then((data) => {
        let id = JSON.parse(data.req.res.client._httpMessage.socket._httpMessage.res.text)._id;
        return mockRequest.put('/products/:product_id').send(editedProductObject, id).then((result) => {
          let resultsValues = Object.values(result.request._data);
          let expectedValues = Object.values(editedProductObject);
          expect(resultsValues).toEqual(expectedValues);
        });
      });
  });
});




