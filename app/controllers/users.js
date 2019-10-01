const constants = require('../constants');
const logger = require('../logger');
const { hashString } = require('../helpers/encryption');
const { generateToken } = require('../helpers/sessions');
const { validateCredentials } = require('../interactors/users');
const { serializeResponse } = require('../serializers/common');
const { createUser } = require('../services/users');

const {
  responses: { USER_CREATED_OK, USER_LOGGED_IN }
} = constants;

exports.signUpUser = (req, res, next) => {
  logger.info('Singing up...');
  const user = req.body;
  return hashString(user.password)
    .then(hashedPassword => createUser({ ...user, password: hashedPassword }))
    .then(createdUser => {
      logger.info(`User created with id: ${createdUser.id}`);
      return res.status(201).send(serializeResponse(USER_CREATED_OK, createdUser));
    })
    .catch(next);
};

exports.logInUser = (req, res, next) => {
  logger.info('Loging in...');
  const credentials = req.body;
  return validateCredentials(credentials)
    .then(generateToken)
    .then(token => res.status(200).send(serializeResponse(USER_LOGGED_IN, { token })))
    .catch(next);
};
