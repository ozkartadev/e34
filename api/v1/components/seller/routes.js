module.exports = function (express, passport) {
  let router = express.Router();
  let ObjectValidator = require('../../shared/utils/object-validator');

  router.get('/test', (req, res) => {
    res.status(200).json({});
  });

  return router;
};
