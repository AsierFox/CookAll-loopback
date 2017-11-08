'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server/server');

describe('Sum test', function () {

  it('Should sum 1 + 1 = 2', function () {

    expect(1 + 1).to.equal(2);
  });
});

describe('Login auth', function () {
  
  it('Should fail', function () {
    return chai
      .request(app)
      .post('/auth/login')
      .send({
        email: 'a@a.a',
        password: 'aa'
      })
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res.body.code, 'code').to.equal(401);
      });
  });

  it('Should login', function () {
    return chai
      .request(app)
      .post('/auth/login')
      .send({
        email: 'a@a.a',
        password: 'a'
      })
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res.body.code, 'code').to.equal(200);
      });
  });
});
