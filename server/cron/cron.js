'use strict';

let CronJob = require('cron').CronJob;

module.exports = function (app) {

  let momentTimezone = 'Europe/Madrid';

  try {
    new CronJob('*/30 * * * * *', function () {
      console.log('Cron started!');
    }, function () {
      console.log('Cron finished!'); // TODO Review this, it is not executing
    }, true, momentTimezone);
  } catch (err) {
    console.log('Cron error: ', err);
  }

};
