const chai = require('chai');
const app = require('../app');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
let pincode = 110078;
describe('/GET all the nearby places by pincode', () => {
  it('it should GET all the nearby places', (done) => {
    chai.request(app)
      .get(`/search/${pincode}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('it should return 404 error', (done) => {
    chai.request(app)
      .get('/search/')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
