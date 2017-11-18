let mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
  categoryName: {type: String, required: true},
  friendlyId: {type: String, required: true},
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  },
  childCategories: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  }]
},{
  timestamps: true
});

let categoryModel = mongoose.model('Category', categorySchema);


module.exports.model = categoryModel;