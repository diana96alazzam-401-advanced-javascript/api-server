'use strict';
const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('500 internal server error Middleware', () => {

  it('status 500 and a status message (Server Error!!)', () => {
    return mockRequest.get('/api/v1/categories/kjjkjkj').then(data=> {        
      expect(data.status).toEqual(500); 
    });
  });
});
