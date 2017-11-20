module.exports = function(express, passport) {
  let router = express.Router();
  let UserModel = require('../../../models/user.model').model;
  let errors = require('../../../shared/error');
  let LocalStrategy = require('passport-local').Strategy;

  passport.use(UserModel.createStrategy());
  passport.serializeUser(UserModel.serializeUser());
  passport.deserializeUser(UserModel.deserializeUser());


  router.post('/login', function (req, res) {
    console.dir(req.body);
    passport.authenticate('local', function (err, user, info) {
      if(err || !user) {
        return errors.signInError(res);
      }
      req.login(user, function(err) {
        if(err) {
          return errors.signInError(res);
        }
        return res.status(200).json({user: user});
      });
    })(req, res, function(err){
      console.dir(err);
    });
  });

  router.delete('/logout', function(req, res){
    req.logout();
    req.session.destroy();
    return res.status(200).json({});
  });

  router.post('/register', function(req, res){
    if (!req.body){
      return errors.missingRequiredDataError(res);
    }

    let newUser = req.body;
    newUser.username = newUser.email;


    UserModel.register(newUser, req.body.password, function(err) {
      if(err){
        if (err.name === 'UserExistsError'){
          return errors.userExistsError(res);
        }
        return errors.registrationError(res);
      }
      req.body.username = newUser.username;
      req.body.password = newUser.password;
      passport.authenticate('local', function (err, user, info) {
        if(err || !user) {
          return errors.signInError(res);
        }
        req.login(user, function(err) {
          if(err) {
            return errors.signInError(res);
          }
          return res.status(200).json({user: user});
        });
      })(req, res, function(err){
        console.dir(err);
      });

    });

  });



  return router;
};