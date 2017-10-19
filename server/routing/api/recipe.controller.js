'use strict';

let apiService = require('./../../services/api.service');

module.exports = function (app) {

  let Recipe = app.models.Recipe;

  app.route('/recipes')
    /**
     * Get all recipes.
     */
    .get(function (req, res) {

      // TODO Add pagination

      Recipe.find({
        where: {
          deletedAt: null
        },
        include: [
          {
            relation: 'categories',
            scope: {
              fields: {
                name: true
              }
            }
          },
          {
            relation: 'profile',
            scope: {
              fields: {
                username: true,
                avatar: true
              }
            }
          }
        ],
        order: 'createdAt ASC'
      }, function (err, recipes) {

        let response = apiService.getSuccess(recipes);

        res.send(response);
      });
    });

    app.route('/recipes/:recipeId')
      /**
       * Get recipe detal.
       */
      .get(function (req, res) {
        let recipeId = req.params.recipeId;

        res.send(apiService.getSuccess(recipeId));
      });

};
