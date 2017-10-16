'use strict';

let loopback = require('loopback');

module.exports = function (app) {

  let resetDB = true;

  if (resetDB) {

    app.dataSources.cookallMysql.automigrate(function () {
      // Create models
    });

    console.log('Auto migration completed!');
  }
};
