'use strict';
const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 internal server error Middleware', () => {

  it('status 404 and a status message (Server Error!!)', () => {
    return mockRequest.get('/notFound').then(data=> {        
      expect(data.status).toEqual(404); 
    });
  });
});
