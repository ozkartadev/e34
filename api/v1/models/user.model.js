let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({

},{
  timestamps: true
});

userSchema.plugin(passportLocalMongoose, {
  attemptsField: 'loginAttempts',
  lastLoginField: 'lastSignedInAt',
  hashField: 'passHash',
  saltField: 'passSalt',
  interval: 1000,
  usernameLowerCase: true,
  limitAttempts: true,
  maxAttempts: 5
});

let userModel = mongoose.model('User', userSchema);


module.exports.model = userModel;