'use strict';

module.exports = {
  success: success,
  malformedParameters: malformedParameters,
  inappropriateData: inappropriateData,
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

function inappropriateData(errors) {
  return {
    code: 422,
    status: 'Unprocessable Entity',
    errors: errors
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
