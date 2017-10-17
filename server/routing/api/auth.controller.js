'use strict';

module.exports = function (app) {

  let User = app.models.User;

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

      User.login({
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
