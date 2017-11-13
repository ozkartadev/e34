module.exports = function (express) {
  var router = express.Router();
  var passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  let UserComponent = require('../components/visitor/user/user.component')(express, passport);

  router.use('/users', UserComponent);


  return router;
};
