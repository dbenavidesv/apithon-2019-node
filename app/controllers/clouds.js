const logger = require('../logger');
const { getCloudsMeasurements } = require('../interactors/clouds');
const { findNearestCloud } = require('../helpers/clouds');
const { getClouds } = require('../services/clouds');

exports.getCloudsMeasurements = (req, res, next) => {
  logger.info('Getting citizen clouds measures...');
  return getCloudsMeasurements()
    .then(cloudsMeasurements => res.status(200).send({ cloudsMeasurements }))
    .catch(next);
};

exports.getNearestCloud = (req, res, next) => {
  logger.info('Getting nearest cloud to the user...');
  const { longitude, latitude } = req.query;
  return getClouds({ active: true })
    .then(clouds =>
      findNearestCloud({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }, clouds)
    )
    .then(nearestCloud => res.status(200).send({ nearestCloud }))
    .catch(next);
};
