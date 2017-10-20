'use strict';

let apiService = require('./../../services/api.service');

module.exports = function (app) {

  let Profile = app.models.Profile;

  app.route('/auth/login')
    .post(function (req, res) {

      let email = req.body.email;
      let password = req.body.password;

      if (!email || !password) {
        return res.send(apiService.loginError());
      }

      Profile.login({
        email: email,
        password: password
      }, function (err, userAuth) {
        if (err) {
          return res.send(apiService.loginError());
        }

        let response = apiService.loginError(userAuth);

        return res.send(apiService.success(response));
      });
    });

};
