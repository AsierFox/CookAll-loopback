'use strict';

module.exports = function (app) {

  app.route('/test')
    .get(function (req, res) {

      res.send({ test: "MEW" });
    });

};
