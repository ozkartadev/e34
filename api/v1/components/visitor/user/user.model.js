let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  salary: {type: Number, required: true},
  salaryPayDay: {type: Number, default: 0, required: true},
  salaryPayDate: {type: Date},
  nextSalaryPayDate: {type: Date},
  balance: {type: Number, default: 0},

  createdAt: {type: Date, default: Date.now}
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