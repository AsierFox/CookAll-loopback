'use strict';

module.exports = {
  getSuccess: getSuccess,
  getLoginError: getLoginError
};

function getSuccess(data) {
  return {
    code: 200,
    status: 'OK',
    data: data
  };
}

function getLoginError() {
  return {
    code: 401,
    status: 'Unauthorized',
    error: 'Bad credentials.'
  };
}
