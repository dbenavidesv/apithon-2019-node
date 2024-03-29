const { signUpUser, logInUser } = require('./controllers/users');
const { getCloudsMeasurements, getNearestCloud } = require('./controllers/clouds');
const { healthCheck } = require('./controllers/healthCheck');
const { saveTrip } = require('./controllers/trips');

exports.init = app => {
  app.get('/health', healthCheck);

  app.post('/users', signUpUser);
  app.post('/users/sessions', logInUser);
  app.post('/users/trips', saveTrip);

  app.get('/clouds/measurements', getCloudsMeasurements);
  app.get('/clouds/nearest', getNearestCloud);
};
