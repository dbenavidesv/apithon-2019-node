const logger = require('../logger');
const { badLogInError } = require('../errors');
const { checkHash } = require('../helpers/encryption');
const { getUserBy } = require('../services/users');

exports.validateCredentials = credentials =>
  getUserBy({ email: credentials.email }).then(user => {
    if (user) {
      return checkHash(credentials.password, user.password).then(isPassword =>
        isPassword
          ? user
          : (logger.info('The provided password is incorrect'), badLogInError('Error: Invalid Credentials'))
      );
    }
    logger.info(`The user ${credentials.email} was not found`);
    return badLogInError('Error: Invalid Credentials');
  });
