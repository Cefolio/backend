// bring in server
const server = require('./user_router');
// bring in supertest
const request = require('supertest');

let token;

describe('AUth Test', () => {
  it('token being passed?', async () => {
    // test fir token
    beforeAll((done) =>{
      request(server)
      .post('/login')
      .send({
        username: 'admin', 
        password:'drownd'
      })
      .end((error, response) =>{
        token = response.body.token;
        done();
      })
    })
  });
});