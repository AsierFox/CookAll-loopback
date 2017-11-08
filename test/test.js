'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server/server');

var user = {
  id: 0,
  token: ''
};

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

        user.id = res.body.data.userId;
        user.token = res.body.data.id;
      });
  });
});

describe('Recipe actions', function () {
  
  it('Should not be authorized', function () {
    return chai
      .request(app)
      .get('/recipes')
      .catch(function (err) {
        expect(err).to.have.status(401);
      });
  });

  it('Should return an array of recipes', function () {
    return chai
      .request(app)
      .get('/recipes?access_token=' + user.token)
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res.body.code, 'code').to.equal(200);
        expect(res.body.data, 'array of recipes').to.be.an('array');
      });
  });
});
