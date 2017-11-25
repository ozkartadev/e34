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

module.exports.internalServerError = function(res) {
  return res.status(InternalServerError.code).json(InternalServerError);
};

//______________________________________________________________
let MissingRequiredDataMessage = {
  code: 400,
  name: 'MISSING_DATA',
  title: 'Missing Data',
  msg: 'Data needed is not presented'
};

let InternalServerError = {
  code: 500,
  name: 'INTERNAL_SERVER_ERROR',
  title: 'Internal Server Error',
  msg: 'Server encountered error while processing request.'
};
