module.exports = function (express) {
  let router = express.Router();
  let passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  let sharedRoutes = require('../components/shared/routes')();

  route.use('/shared', sharedRoutes);

  return router;
};
