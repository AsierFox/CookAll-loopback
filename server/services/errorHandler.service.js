'use strict';

module.exports = {
  printError: printError
};

function printError(error, tag) {
  if (error) {
    console.log('ERROR', error);
  }
}
