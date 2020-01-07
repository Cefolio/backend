// bring in server
const server = require('./server');
// bring in supertest
const request = require('supertest');

describe('server.js', () => {
  it('should be testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
  });
});