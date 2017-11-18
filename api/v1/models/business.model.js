let mongoose = require('mongoose');

let businessSchema = mongoose.Schema({
  businessDisplayName: {type: String, required: true},
  businessType: {
    type: String, enum: [

    ]
  }
  businessCategory: {
    type: string,
    enum: []
  },
  identificationCode: {type: String, required: true},
  registrationCode: {type: String, required: true},
  address: {
    country: {type: String, required: true},
    city: {type: String, required: true},
    address1: {type: String, required: true},
    address2: {type: String, required: true},
    zipCode: {type: String, required: true}
  }
},{
  timestamps: true
});

let businessModel = mongoose.model('Business', businessSchema);


module.exports.model = businessModel;