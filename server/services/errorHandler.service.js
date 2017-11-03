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
  if (err) {
    // TODO log error
    return res.status(500).json(apiService.serverError());
  }
}
