'use strict';

module.exports = {
  success: success,
  malformedParameters: malformedParameters,
  resourceNotFound: resourceNotFound,
  loginError: loginError
};

function success(data) {
  return {
    code: 200,
    status: 'OK',
    data: data
  };
}

function malformedParameters() {
  return {
    code: 400,
    status: 'Bad Request'
  };
}

function resourceNotFound() {
  return {
    code: 404,
    status: 'Resource not found'
  };
}

function loginError() {
  return {
    code: 401,
    status: 'Unauthorized',
    error: 'Bad credentials'
  };
}
