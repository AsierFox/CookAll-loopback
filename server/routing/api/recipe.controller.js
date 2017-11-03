'use strict';

const { check, validationResult } = require('express-validator/check');

const authMiddleware = require('./../../middlewares/auth.middleware');
const apiService = require('./../../services/api.service');

module.exports = function (app) {

  let Recipe = app.models.Recipe;
  let RecipeLike = app.models.RecipeLike;

  app.route('/recipes')
    /**
     * Get all recipes.
     */
    .get(authMiddleware.ensureAuth, function (req, res) {

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
          },
          { relation: 'mainPhoto' }
        ],
        order: 'createdAt ASC'
      }, function (err, recipes) {

        // TODO Call errorHandler to avoid if here

        res.send(apiService.success(recipes));
      });
    })
    /**
     * Post a new recipe.
     */
    .post([
      check('title', 'The title can not be empty.')
        .exists()
        .trim()
    ], function (req, res) {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(apiService.inappropriateData(errors.mapped()));
      }

      res.send({type: 'ok'});
    });

    app.route('/recipes/:recipeId')
      /**
       * Get recipe detal.
       */
      .get(function (req, res) {
        let recipeId = req.params.recipeId;

        Recipe.findById(recipeId,
          {
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
              },
              { relation: 'mainPhoto' },
              { relation: 'ingredients' },
              { relation: 'steps' },
              { relation: 'photos' },
              { relation: 'comments' }
            ]
          },
          function (err, recipe) {

          if (!recipe) {
            return res.send(apiService.resourceNotFound());
          }

          res.send(apiService.success(recipe));
        });
      });

  app.post('/recipes/:recipeId/like', [
      check('recipeId')
        .exists()
        .matches(/^\d+$/) // A Number
        .toInt()
    ], function (req, res) {

      console.log(req.accessToken);
      
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(apiService.inappropriateData(errors.mapped()));
      }
      
      const recipeId = req.params.recipeId;

      RecipeLike.findOne({
        where: {
          recipeId: 'John',
          profileId: 1
        }
      });

      RecipeLike.create({
        profileId: 1,
        recipeId: recipeId
      }, function (err) {
        /**/
      });

      res.send('MEW');
    });

};
