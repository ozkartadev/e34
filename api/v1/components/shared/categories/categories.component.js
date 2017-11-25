module.exports = function (express, passport) {
  let router = express.Router();
  let errors = require('../../../shared/error');
  //let ObjectValidator = require('../../shared/utils/object-validator');
  let CategoryModel = require('../../../models/category.model').model;
  let async = require('async');


  router.get('/populated-list', (req, res) => {
    let responseObject = {
      items: [],
      page: 0,
      total: 0
    };

    CategoryModel.find({parentCategory: null}, (error, categories) => {
      if (!error) {
        recursivePopulation(categories,function(populatedCategories){
          responseObject.items = categories;
          res.status(200).json(responseObject);
        });
      } else {
        return errors.internalServerError(res);
      }
    });



    function recursivePopulation(array, callback){
      CategoryModel.populate(array, [{path: 'childCategories', model: 'Category'}], function(err, populatedArray){
        for (let i=0;i<populatedArray.length;i++){
          array[i] = populatedArray[i];
        }
        async.each(array, populateSubCategory, function(populated){
          return callback();
        });

        function populateSubCategory(category, callback){
          if (!category.childCategories || !category.childCategories.length){
            return callback();
          }
          recursivePopulation(category.childCategories, function(){
            return callback();
          })
        }
      })
    }
  });



  return router;
};
