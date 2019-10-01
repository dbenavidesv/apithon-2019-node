const constants = require('../constants');
const logger = require('../logger');
const { badLogInError } = require('../errors');
const { checkHash } = require('../helpers/encryption');
const { getUserBy } = require('../services/users');

const {
  errors: { INVALID_CREDENTIALS_ERROR }
} = constants;

exports.validateCredentials = credentials =>
  getUserBy({ email: credentials.email }).then(user => {
    if (user) {
      return checkHash(credentials.password, user.password).then(isPassword =>
        isPassword ? user : badLogInError('The provided password is not valid', INVALID_CREDENTIALS_ERROR)
      );
    }
    logger.info(`The user ${credentials.email} was not found`);
    return badLogInError('The provided email is not valid', INVALID_CREDENTIALS_ERROR);
  });
