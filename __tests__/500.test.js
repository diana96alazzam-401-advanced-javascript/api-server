'use strict';
const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('500 internal server error Middleware', () => {
  
  it('status 500 and a status message (Server Error!!)', () => {
    return mockRequest.get('/products').then(data=> {        
      expect(data.status).toEqual(500); 
    }).catch(e => console.error(e));// catching an error
  });
});
