'use strict';

module.exports = function (app) {

  let Profile = app.models.Profile;

  app.route('/auth/login')
    .post(function (req, res) {

      let email = req.body.email;
      let password = req.body.password;

      if (!email || !password) {
        return res.send({
          code: 401,
          status: 'Unauthorized',
          error: 'Bad credentials.'
        });
      }

      Profile.login({
        email: email,
        password: password
      }, function (err, response) {
        if (err) {
          return res.send({
            code: 401,
            status: 'Unauthorized',
            error: 'Bad credentials.'
          });
        }

        return res.send({
          code: 200,
          status: 'OK',
          data: response
        });
      });
    });

};
