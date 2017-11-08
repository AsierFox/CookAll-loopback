'use strict';

const { check, validationResult } = require('express-validator/check');

const authMiddleware = require('./../../middlewares/auth.middleware');
const apiHeaderService = require('./../../services/apiHeader.service');
const errorHandlerService = require('./../../services/errorHandler.service');

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
        if (err) return errorHandlerService.controlException(res, err);

        res.send(apiHeaderService.success(recipes));
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
        return res.send(apiHeaderService.inappropriateData(errors.mapped()));
      }

      res.send({type: 'ok'});
    });

    app.route('/recipes/:recipeId')
      /**
       * Get recipe detail.
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
            if (err) return errorHandlerService.controlException(res, err);

          if (!recipe) {
            return res.send(apiHeaderService.resourceNotFound());
          }

          res.send(apiHeaderService.success(recipe));
        });
      });

  /**
   * Like a recipe.
   */
  app.post('/recipes/:recipeId/like', authMiddleware.ensureAuth, [
      check('recipeId')
        .exists()
        .matches(/^\d+$/) // A Number
        .toInt()
    ], function (req, res) {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(apiHeaderService.inappropriateData(errors.mapped()));
      }

      const recipeId = req.params.recipeId;
      
      // Check if the recipe is of the user
      Recipe.findOne({
        where: {
          profileId: req.accessToken.userId,
          id: recipeId
        }
      }, function (err, recipe) {
        if (err) return errorHandlerService.controlException(res, err);

        if (recipe) {
          return res.send(apiHeaderService.logicalError('You can not like your own recipe!'));
        }

        // Check if has liked the recipe
        RecipeLike.findOne({
          where: {
            profileId: req.accessToken.userId,
            recipeId: recipeId
          }
        }, function (err, like) {
          if (err) return errorHandlerService.controlException(res, err);

          if (like) {
            return res.send(apiHeaderService.logicalError('You have already liked this recipe!'));
          }
          else {
            RecipeLike.create({
              profileId: req.accessToken.userId,
              recipeId: recipeId
            }, function (err) {
              if (err) return errorHandlerService.controlException(res, err);

              return res.status(200).json(apiHeaderService.success());
            });
          }
        });
      });
    });

  /**
   * Dislike a recipe.
   */
  app.post('/recipes/:recipeId/dislike', authMiddleware.ensureAuth, [
      check('recipeId')
        .exists()
        .matches(/^\d+$/) // A Number
        .toInt()
    ], function (req, res) {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(apiHeaderService.inappropriateData(errors.mapped()));
      }

      const recipeId = req.params.recipeId;

      // Check if the recipe is of the user
      Recipe.findOne({
        where: {
          profileId: req.accessToken.userId,
          id: recipeId
        }
      }, function (err, recipe) {
        if (err) return errorHandlerService.controlException(res, err);

        if (recipe) {
          return res.send(apiHeaderService.logicalError('You can not like your own recipe!'));
        }

        // Check if has liked the recipe
        RecipeLike.destroyAll({
          profileId: req.accessToken.userId,
          recipeId: recipeId
        })
        .then(function (err) {
          if (err) return errorHandlerService.controlException(res, err);
  
          return res.status(200).json(apiHeaderService.success());
        });
      });
    });

};
