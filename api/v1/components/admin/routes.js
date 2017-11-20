module.exports = function (express, passport) {
  let router = express.Router();

  router.get('/test', (req, res) => {
    res.status(200).json({});
  });

  return router;
};
