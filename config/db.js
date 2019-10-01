const mongoose = require('mongoose');
const config = require('../config').common.database;

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: true
  },
  testing: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: 'postgres',
    logging: false
  }
};
const { host } = config;
const { port } = config;
const { name } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
module.exports = mongoose.connect(connectionString);
