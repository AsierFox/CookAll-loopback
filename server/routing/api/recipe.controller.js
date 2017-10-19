'use strict';

let apiService = require('./../../services/api.service');

module.exports = function (app) {

  let Recipe = app.models.Recipe;

  app.route('/recipes')
    .get(function (req, res) {

      Recipe.find({
        where: {
          deletedAt: null
        },
        order: 'createdAt ASC'
      }, function (err, recipes) {

        let response = apiService.getSuccess(recipes);

        res.send(response);
      });
    });

};
