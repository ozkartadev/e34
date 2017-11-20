module.exports = function (express) {
  let router = express.Router();
  let passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  let sharedRoutes = require('../components/shared/routes')(express, passport);

  router.use('/shared', sharedRoutes);

  return router;
};
