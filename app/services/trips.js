const { databaseError } = require('../errors');
const { Trip, Track } = require('../models');

exports.createTrip = trip =>
  Trip.create(trip)
    .then(createdTrip =>
      Track.bulkCreate(trip.tracks.map(track => ({ ...track, tripId: createdTrip.id }))).then(
        () => createdTrip
      )
    )
    .catch(error => databaseError(error));

exports.getTrips = params => Trip.findAll({ where: params, include: [{ model: Track }] });
