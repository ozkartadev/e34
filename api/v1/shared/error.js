module.exports.missingRequiredDataError = function(res){
  return res.status(MissingRequiredDataMessage.code).json(MissingRequiredDataMessage);
};

module.exports.signInError = function(res){
  return res.status(SignInErrorMessage.code).json(SignInErrorMessage);
};

module.exports.registrationError = function(res){
  return res.status(RegistrationErrorMessage.code).json(RegistrationErrorMessage);
};

module.exports.userExistsError = function(res){
  return res.status(UserExistsErrorMessage.code).json(UserExistsErrorMessage);
};

module.exports.errorWhileTransaction = function(res){
  return res.status(ErrorWhileTransactionMessage.code).json(ErrorWhileTransactionMessage);
};

//______________________________________________________________
let MissingRequiredDataMessage = {
  code: 400,
  name: 'MISSING_DATA',
  title: 'Missing Data',
  msg: 'Data needed is not presented'
};

let SignInErrorMessage = {
  code: 401,
  name: 'SIGN_IN_ERROR',
  title: 'Sign In Error',
  msg: 'Error while Sign in'
};

let RegistrationErrorMessage = {
  code: 401,
  name: 'REGISTRATION_IN_ERROR',
  title: 'Registration Error',
  msg: 'Error while Register'
};

let UserExistsErrorMessage = {
  code: 401,
  name: 'USER_EXISTS_ERROR',
  title: 'User Exists Error',
  msg: 'A user with the given EMAIL is already registered'
};

let ErrorWhileTransactionMessage = {
  code: 500,
  name: 'ERROR_WHILE_TRANSACTION',
  title: '',
  msg: 'Error ocured while making transaction.'
};