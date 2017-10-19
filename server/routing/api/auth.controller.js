'use strict';

let apiService = require('./../../services/api.service');

module.exports = function (app) {

  let Profile = app.models.Profile;

  app.route('/auth/login')
    .post(function (req, res) {

      let email = req.body.email;
      let password = req.body.password;

      if (!email || !password) {
        return res.send(apiService.getLoginError());
      }

      Profile.login({
        email: email,
        password: password
      }, function (err, userAuth) {
        if (err) {
          return res.send(apiService.getLoginError());
        }

        let response = apiService.getSuccess(userAuth);

        return res.send(response);
      });
    });

};
