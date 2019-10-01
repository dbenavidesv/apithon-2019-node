const { databaseError } = require('../errors');
const { User } = require('../models');

exports.createUser = (user, transaction) => User.create(user, { transaction }).catch(databaseError);

exports.getUserBy = params => User.findOne({ where: params }).catch(databaseError);
