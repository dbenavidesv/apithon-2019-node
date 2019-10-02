const { findNearest } = require('geolib');
const constants = require('../constants');

const { POLUTION_LEVELS_PM_25 } = constants;

const getPolutionLevel = value => {
  const level = POLUTION_LEVELS_PM_25.find(polutionLevel => value < polutionLevel.value);
  return { id: level.id, label: level.label };
};

exports.getLastestAverageMeasurements = (measurements, minutes) =>
  measurements.map(measurement => ({
    id: measurement.codigoSerial,
    name: measurement.nombre,
    longitude: measurement.longitud,
    latitude: measurement.latitud,
    town: measurement.municipio,
    value: measurement.datos.slice(0, minutes).reduce((sum, current) => sum + current.valor, 0) / minutes,
    polutionLevel: getPolutionLevel(this.value)
  }));

exports.clasifyByActive = measurements =>
  measurements.map(measurement =>
    measurement.value > 0 && measurement.value !== 5
      ? { ...measurement, active: true }
      : { ...measurement, active: false }
  );

exports.filterInactiveClouds = clouds => clouds.filter(({ active }) => active);

exports.findNearestCloud = (location, clouds) => {
  const cloudLocations = clouds.map(cloud => ({ latitude: cloud.latitude, longitude: cloud.longitude }));
  const nearest = findNearest(location, cloudLocations);
  return clouds.filter(
    cloud => cloud.latitude === nearest.latitude && cloud.longitude === nearest.longitude
  )[0];
};
