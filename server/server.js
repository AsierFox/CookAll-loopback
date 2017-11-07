'use strict';

// TODO Review this!
require('events').EventEmitter.defaultMaxListeners = 30;

const loopback = require('loopback');
const boot = require('loopback-boot');

const bodyParser = require('body-parser');
const winston = require('winston');

const router = require('./routing/router');
const cron = require('./cron/cron');

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

  app.use(loopback.token({  
    model: app.models.accessToken,
    currentUserLiteral: 'me',
    searchDefaultTokenKeys: false,
    cookies: ['access_token'],
    headers: ['access_token', 'X-Access-Token'],
    params: ['access_token']
  }));

  // Conf body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false,
  }));

  // Conf logs
  var logger = new winston.Logger({
    level: 'verbose',
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: '/logs/logs.log' })
    ]
  });

  if (process.env.NODE_ENV === 'production') {
    logger.remove(winston.transports.Console);
  }

  app.logger = logger;

  router(app);

  cron(app);

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
