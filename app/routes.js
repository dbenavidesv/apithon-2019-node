const { signUpUser, logInUser } = require('./controllers/users');
const { healthCheck } = require('./controllers/healthCheck');

exports.init = app => {
  app.get('/health', healthCheck);

  app.post('/users', signUpUser);
  app.post('/users/sessions', logInUser);
};
