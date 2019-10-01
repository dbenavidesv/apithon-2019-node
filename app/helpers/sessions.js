const { signAsync } = require('jsonwebtoken-promisified');
const {
  common: { session: sessionConfig }
} = require('../../config');

exports.generateToken = (user, secret = sessionConfig.secret, expiresIn = sessionConfig.expirationTime) => {
  const payload = {
    id: user.id,
    email: user.email
  };
  return signAsync(payload, secret, { expiresIn });
};
