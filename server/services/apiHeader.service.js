'use strict';

module.exports = {
  success: success,
  malformedParameters: malformedParameters,
  inappropriateData: inappropriateData,
  resourceNotFound: resourceNotFound,
  logicalError: logicalError,
  authError: authError,
  serverError: serverError
};

function success(data) {
  let res = {
    code: 200,
    status: 'OK'
  };

  if (data) {
    res.data = data;
  }

  return res;
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

function logicalError(errorMessage) {
  return {
    code: 409,
    status: 'Conflict',
    message: errorMessage
  };
}

function authError() {
  return {
    code: 401,
    status: 'Unauthorized'
  };
}

function serverError(res) {
  return {
    code: 500,
    status: 'Internal Server Error'
  };
}
