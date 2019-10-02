const logger = require('../logger');
const { getCloudsMeasurements, saveClouds } = require('../services/clouds');
const { getLastestAverageMeasurements, filterInactiveClouds, clasifyByActive } = require('../helpers/clouds');
const {
  common: { cloudsApi }
} = require('../../config');

exports.getCloudsMeasurements = () =>
  getCloudsMeasurements()
    .then(measurements => getLastestAverageMeasurements(measurements, cloudsApi.minutesForAvg))
    .then(clasifyByActive)
    .then(cloudsMeasurements => {
      saveClouds(cloudsMeasurements).catch(logger.error);
      return filterInactiveClouds(cloudsMeasurements);
    });
