const { compare, hash } = require('bcryptjs');

exports.checkHash = (someString, hashedString) => compare(someString, hashedString);

exports.hashString = (someString, saltRounds = 10) => hash(someString, saltRounds);
