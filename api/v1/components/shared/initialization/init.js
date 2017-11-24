module.exports = function (express, passport) {
  let categoryInit = require('../../../shared/js/category.init').init;
  let router = express.Router();
  let ObjectValidator = require('../../../shared/utils/object-validator');

  router.post('/categories', (req, res) => {
    categoryInit();
    res.status(200).json({});
  });

  return router;
};
