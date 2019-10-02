const { findNearest } = require('geolib');

exports.getLastestAverageMeasurements = (measurements, minutes) =>
  measurements.map(measurement => ({
    id: measurement.codigoSerial,
    name: measurement.nombre,
    longitude: measurement.longitud,
    latitude: measurement.latitud,
    town: measurement.municipio,
    value: measurement.datos.slice(0, minutes).reduce((sum, current) => sum + current.valor, 0) / minutes
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
