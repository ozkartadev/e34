let mongoose = require('mongoose');

let productLocationSchema = mongoose.Schema({
  storeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  name: {type: String, required: true},
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

let productLocationModel = mongoose.model('ProductLocation', productLocationSchema);


module.exports.model = productLocationModel;