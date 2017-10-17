'use strict';

let loopback = require('loopback');
let boot = require('loopback-boot');

let bodyParser = require('body-parser');

let router = require('./routing/router');
let cron = require('./cron/cron');

let app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  app.disable('x-powered-by');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false,
  }));

  router(app);

  cron(app);

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
