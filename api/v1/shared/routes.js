module.exports = function (express) {
  let router = express.Router();
  let passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  let adminRoutes = require('../components/admin/routes')(express, passport);
  let buyerRoutes = require('../components/buyer/routes')(express, passport);
  let ownerRoutes = require('../components/owner/routes')(express, passport);
  let sellerRoutes = require('../components/seller/routes')(express, passport);
  let sharedRoutes = require('../components/shared/routes')(express, passport);
  let visitorRoutes = require('../components/visitor/routes')(express, passport);

  router.use('/admin', adminRoutes);
  router.use('/buyer', buyerRoutes);
  router.use('/owner', ownerRoutes);
  router.use('/seller', sellerRoutes);
  router.use('/shared', sharedRoutes);
  router.use('/visitor', visitorRoutes);

  return router;
};
