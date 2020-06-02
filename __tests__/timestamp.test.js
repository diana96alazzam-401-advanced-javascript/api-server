const timestampMiddleware = require('../middleware/timestamp.js');
describe('Timestamp Middleware', () => {
  const req = {};
  const res = {};
  const next = jest.fn();

  it('moves to the next middleware', () => {
    timestampMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith(); 
  });
});
