'use strict';

module.exports = {
  getSuccess: getSuccess,
  getBadParameters: getBadParameters,
  getLoginError: getLoginError
};

function getSuccess(data) {
  return {
    code: 200,
    status: 'OK',
    data: data
  };
}

function getBadParameters() {
  return {
    code: 400,
    status: 'Bad Request'
  };
}

function getLoginError() {
  return {
    code: 401,
    status: 'Unauthorized',
    error: 'Bad credentials.'
  };
}
