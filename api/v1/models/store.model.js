let mongoose = require('mongoose');

let storeSchema = mongoose.Schema({
  title: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  friendlyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  shortDescription: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  longDescription: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  phones: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}],
  emails: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}],
  facebook: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  keywords: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}],
  termsAndConditions: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
  media: [{
    type: {type: String, enum: ['image', 'video']},
    format: {type: String, required: true},
    url: {type: String, required: true}
  }],
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  // TODO sales
  rating: {type: Number, required: true, default: 0},
  userFeadback: {type: mongoose.Schema.Types.ObjectId, ref: 'Feedback'}
},{
  timestamps: true
});

let storeModel = mongoose.model('Store', storeSchema);


module.exports.model = storeModel;