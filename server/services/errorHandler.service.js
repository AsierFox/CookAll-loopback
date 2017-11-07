'use strict';

const apiHeaderService = require('./apiHeader.service');

module.exports = {
  printError: printError,
  controlException: controlException
};

function printError(error, tag) {
  if (error) {
    console.log('ERROR', error);
  }
}

function controlException(res, err) {
  // TODO log error
  console.log('[ERROR] errorHandler - controlException: ', err);
  return res.status(500).json(apiHeaderService.serverError());
}
