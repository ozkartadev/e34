let CategoryModel = require('../../models/category.model').model;
let categories = require('../data/category');


module.exports.init = function () {
  categories.forEach(parentCategory => {
    createCategory(parentCategory, null);
  });
  function createCategory(_category, _parent) {
    let category = new CategoryModel();
    category.categoryName = _category.category_name;
    category.friendlyId = _category.category_name;
    category.parentCategory = _parent;
    category.childCategories = [];
    _category.child_category.forEach(child => {
      category.childCategories.push(createCategory(child, category));
    });

    category.save((err, success) => {
      if (err) {
        console.dir(err);
      }
    });
    return category;
  }
};