'use strict';

let loopback = require('loopback');

module.exports = function (app) {

  let resetDB = true;
  let seedDB = true;

  if (resetDB) {

    app.dataSources.cookallMysql.automigrate(function () {

      if (seedDB) {
        // Create models
      }
    });

    console.log('Auto migration completed!');
  }
};
