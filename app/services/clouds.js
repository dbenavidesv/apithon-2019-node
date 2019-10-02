const request = require('request-promise');
const util = require('util');
const logger = require('../logger');
const { itemNotFoundError, externalApiError, databaseError } = require('../errors');
const { Cloud } = require('../models');
const {
  common: { cloudsApi }
} = require('../../config');

const executeRequest = options => {
  logger.info(`Request: ${options.method} ${options.uri} ${options.qs ? util.inspect(options.qs) : ''}`);
  if (options.headers) {
    logger.info(`Headers: [${Object.keys(options.headers).join(', ')}]`);
  }
  return request(options).catch(error =>
    error.statusCode === 404
      ? itemNotFoundError('Item not found in external api')
      : externalApiError(error.message)
  );
};

exports.getCloudsMeasurements = () => {
  const options = {
    method: 'GET',
    uri: `${cloudsApi.endpoint}`,
    json: true
  };
  return executeRequest(options);
};

exports.saveClouds = clouds =>
  Cloud.bulkCreate(clouds, { updateOnDuplicate: ['id'], logging: false }).catch(databaseError);

exports.getClouds = params => Cloud.findAll({ params }).catch(databaseError);
