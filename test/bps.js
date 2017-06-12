const app = require('../server');
const expect = require('chai').expect;
const request = require('supertest');

describe('Home page availability test', function() {
  it('should return a status of 200 OK', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
