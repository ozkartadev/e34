module.exports = function (express, passport) {
  let router = express.Router();
  let ObjectValidator = require('../../shared/utils/object-validator');

  router.get('/test', (req, res) => {

    let obj = {
      fName: 'ozkarta',
      lName: '   ',
      age: '25'
    };
    let validator = {
      fName: {
        required: true,
        minLength: 15,
        maxLength: 3,
        type: 'string'
      },
      age: {
        required: true,
        minValue: 26,
        maxValue: 24,
        type: 'number'
      },
      lName: {
        required: true
      }
    };
    res.status(200).json(ObjectValidator.validateObject(obj, validator));
  });

  return router;
};
