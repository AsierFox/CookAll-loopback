'use strict';

let apiHeaderService = require('./../../services/apiHeader.service');

module.exports = function (app) {

  let Profile = app.models.Profile;

  app.route('/auth/login')
    .post(function (req, res) {

      let email = req.body.email;
      let password = req.body.password;

      if (!email || !password) {
        return res.send(apiHeaderService.authError());
      }

      Profile.login({
        email: email,
        password: password
      }, function (err, userAuth) {
        if (err) {
          return res.send(apiHeaderService.authError());
        }

        return res.send(apiHeaderService.success(userAuth));
      });
    });

};
