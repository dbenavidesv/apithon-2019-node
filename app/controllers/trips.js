const logger = require('../logger');
const { getTotalDuration } = require('../helpers/trips');
const { createTrip, getTrips } = require('../services/trips');

exports.saveTrip = (req, res, next) => {
  logger.info('Saving trip...');
  const trip = req.body;
  trip.durationTime = getTotalDuration(trip);
  return createTrip(trip)
    .then(createdTrip => res.status(200).send({ trip: createdTrip }))
    .catch(next);
};

exports.getTotalExposure = (req, res, next) => {
  logger.info('Getting total exposure...');
  const { userId } = req.query;
  return getTrips({ userId })
    .then(trips => res.status(200).send({ trips }))
    .catch(next);
};
