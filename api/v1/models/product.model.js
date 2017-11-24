let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
  friendlyId: {type: String, required: true},
  title:{type: String, required: true},
  description: {type: String, required: true},
  categories: [{
    type: mongoose.Schema.ObjectId, ref: 'Category'
  }],
  media: [{
    type: {type: String, enum: ['image', 'video']},
    format: {type: String, required: true},
    url: {type: String, required: true}
  }],
  quantity: {type: Number, default: 0, required: true},
  originalPrice: {type: Number, default: 0, required: true},
  salePrice: {type: Number, default: 0, required: false},
  locations: [{
    quantityOnLocation: {type: Number, required: true, default: 0},
    location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
  }],
  status: {
    type: String,
    enum: [
      'active',
      'disabled'
    ]
  },
  rating: {type: Number, required: true, default: 0},
  userFeedback: {type: mongoose.Schema.Types.ObjectId, ref: 'Feedback'}
},{
  timestamps: true
});

let productModel = mongoose.model('Product', productSchema);


module.exports.model = productModel;