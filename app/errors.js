const { errors } = require('./constants');

const { DEFAULT_ERROR, DATABASE_ERROR } = errors;

const errorObjectCreation = (message, internalCode) => ({
  message,
  internalCode
});

const internalError = (message, internalCode) => Promise.reject(errorObjectCreation(message, internalCode));

exports.defaultError = message => internalError(message, DEFAULT_ERROR);

exports.databaseError = error => internalError(`${error.name}: ${error.message}`, DATABASE_ERROR);

exports.badLogInError = (message, code) => internalError(message, code);
