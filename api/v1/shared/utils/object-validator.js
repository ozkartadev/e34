module.exports.validateObject = function(_object, validator) {
  let validationErrors = {};

  // Run Required field validations
  Object.keys(validator).forEach(validatorKey => {
    if (validator[validatorKey]['required'] && !_object[validatorKey]) {
      validationErrors[validatorKey] = {};
      validationErrors[validatorKey]['required'] = `Field "${validatorKey}" is required`;
    }
  });

  //
  Object.keys(_object).forEach(objectKey => {
    console.log('validating key ...' + objectKey);
    if (validator[objectKey]) {
      Object.keys(validator[objectKey]).forEach(validatorKey => {
        mainValidationLogic(objectKey, _object, validatorKey, validator, validationErrors);
      });
    }
  });
  return validationErrors;
};


// Object = {
//   a: ad,
//   b: 'asddsa',
// };
//
// validator = {
//   keyName: {
//     required: true || false,
//     type: string || number || date ,
//     minLength: number,
//     maxLength: number,
//     minValue: number,
//     maxValue: number,
//     minDate: Date, TODO
//     maxDate: Date, TODO
//     pattern: string
//   },
//    allowed: [] // fieldNames
// };

//____________________________________FUNCTIONS_______________________________
function mainValidationLogic(objectKey, _object, validatorKey, validator, validationErrors) {
  if (validatorKey === 'required' && validator[objectKey][validatorKey]) {
    requiredValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'type') {
    typeValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'minLength') {
    minLengthValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'maxLength') {
    maxLengthValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'minValue') {
    minValueValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'maxValue') {
    maxValueValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'minDate') {
    minDateValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'maxDate') {
    maxDateValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }

  if (validatorKey === 'pattern') {
    patternValidation(objectKey, _object[objectKey], validatorKey, validator[objectKey][validatorKey], validationErrors);
  }
}

function requiredValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {
  console.log(objectValue);
  if (!(objectValue && objectValue.toString().trim())) {
    if (!validationErrors[objectKey]) {
      validationErrors[objectKey] = {};
    }
    validationErrors[objectKey][validatorKey] = `Field "${objectKey}" must not be empty`;
  }
}

function typeValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {
  if (typeof objectValue !== validatorValue) {
    if (!validationErrors[objectKey]) {
      validationErrors[objectKey] = {};
    }
    validationErrors[objectKey][validatorKey] = `Field "${objectKey}" must be ${validatorValue}`;
  }
}

function minLengthValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {
  if (typeof objectValue === 'string'){
    if (objectValue.trim().length < validatorValue) {
      if (!validationErrors[objectKey]) {
        validationErrors[objectKey] = {};
      }
      validationErrors[objectKey][validatorKey] = `Minimum length of "${objectKey}" must be ${validatorValue}`;
    }
  } else {
    if (!validationErrors[objectKey]) {
      validationErrors[objectKey] = {};
    }
    validationErrors[objectKey][validatorKey] = `"${objectKey}" must be string to perform validation`;
  }
}

function maxLengthValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {
  if (typeof objectValue === 'string'){
    if (objectValue.trim().length > validatorValue) {
      if (!validationErrors[objectKey]) {
        validationErrors[objectKey] = {};
      }
      validationErrors[objectKey][validatorKey] = `Maximum length of "${objectKey}" must be ${validatorValue}`;
    }
  } else {
    if (!validationErrors[objectKey]) {
      validationErrors[objectKey] = {};
    }
    validationErrors[objectKey][validatorKey] = `"${objectKey}" must be string to perform validation`;
  }
}

function minValueValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {
  if (typeof objectValue === 'number'){
    if (objectValue < validatorValue) {
      if (!validationErrors[objectKey]) {
        validationErrors[objectKey] = {};
      }
      validationErrors[objectKey][validatorKey] = `Minimum value of "${objectKey}" must be ${validatorValue}`;
    }
  } else {
    if (!validationErrors[objectKey]) {
      validationErrors[objectKey] = {};
    }
    validationErrors[objectKey][validatorKey] = `"${objectKey}" must be number to perform validation`;
  }
}

function maxValueValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {
  if (typeof objectValue === 'number'){
    if (objectValue > validatorValue) {
      if (!validationErrors[objectKey]) {
        validationErrors[objectKey] = {};
      }
      validationErrors[objectKey][validatorKey] = `Maximum value of "${objectKey}" must be ${validatorValue}`;
    }
  } else {
    if (!validationErrors[objectKey]) {
      validationErrors[objectKey] = {};
    }
    validationErrors[objectKey][validatorKey] = `"${objectKey}" must be number to perform validation`;
  }
}

function minDateValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {

}

function maxDateValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {

}

function patternValidation(objectKey, objectValue, validatorKey, validatorValue, validationErrors) {

}