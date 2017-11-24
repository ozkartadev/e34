module.exports = function (express, passport) {
  let router = express.Router();
  let ObjectValidator = require('../../shared/utils/object-validator');

  router.get('/test', (req, res) => {
    res.status(200).json({});
  });

  let userController = require('./user/user.component')(express, passport);
  let initController = require('./initialization/init')(express, passport);

  router.use('/user', userController);
  router.use('/init', initController);

  return router;
};
