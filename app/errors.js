const { errors } = require('./constants');

const { DEFAULT_ERROR, DATABASE_ERROR, BAD_LOGIN_ERROR } = errors;

const errorObjectCreation = (message, internalCode) => ({
  internalCode,
  message
});

const internalError = (message, internalCode) => Promise.reject(errorObjectCreation(message, internalCode));

exports.defaultError = message => internalError(message, DEFAULT_ERROR);

exports.databaseError = error => internalError(`${error.name}: ${error.message}`, DATABASE_ERROR);

exports.badLogInError = message => internalError(message, BAD_LOGIN_ERROR);
