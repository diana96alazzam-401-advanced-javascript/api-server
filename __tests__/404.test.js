'use strict';
const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('404 not found error Middleware', () => {

  it('status 404 and a status message (Server Error!!)', () => {
    return mockRequest.get('/notFound').then(data=> {        
      expect(data.status).toEqual(404); 
    });
  });
});
