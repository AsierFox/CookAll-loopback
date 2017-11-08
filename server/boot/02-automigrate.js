'use strict';

let asyncSeries = require('async/series');

let errorHandlerService = require('./../services/errorHandler.service');

module.exports = function (app) {

  const migrate = app.get('automigrate');

  let Profile = app.models.Profile;
  let Recipe = app.models.Recipe;
  let RecipeCategory = app.models.RecipeCategory;
  let RecipeMainPhoto = app.models.RecipeMainPhoto;
  let ProfileFollow = app.models.ProfileFollow;
  let RecipeComment = app.models.RecipeComment;
  let RecipeStep = app.models.RecipeStep;
  let RecipeLike = app.models.RecipeLike;
  let Ingredient = app.models.Ingredient;
  let Feedback = app.models.Feedback;

  if (migrate) {

    app.dataSources.cookallMysql.automigrate(function () {

      // Create models
      asyncSeries([
        /**
         * Profile
         */
        function (cb) {
          Profile.create({ // User id, 1
            email: 'a@a.a',
            password: 'a',
            username: 'Asier',
            name: 'Asier',
            surnames: 'González López',
            gender: 'm'
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Profile.create({ // User id, 2
            email: 'b@b.b',
            password: 'b',
            username: 'Jasone',
            name: 'Jasone',
            surnames: 'Arranz Martinez',
            gender: 'f'
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Profile.create({ // User id, 3
            email: 'c@c.c',
            password: 'c',
            username: 'Eneritz',
            name: 'Eneritz',
            surnames: 'Leafhollow Dannay',
            gender: 'f'
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * Recipe
         */
        function (cb) {
          Recipe.create({
            title: 'Iced Pumpkin Cookies',
            description: 'Wonderful spicy iced pumpkin cookies that both kids and adults love!',
            cookingTime: '1 h 20 m',
            calories: 122,
            likes: 3,
            profileId: 3
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Recipe.create({
            title: 'To Die For Fettuccine Alfredo',
            description: 'This is a recipe that I created by modifying my mother\'s recipe. My boyfriend is a fettuccine Alfredo connoisseur and he scrapes the pan every time! I get nothing but rave reviews when I make this dish. I must warn you, this recipe is not for the health conscious. Enjoy!',
            cookingTime: '30 m',
            calories: 964,
            likes: 1,
            profileId: 2
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * RecipeCategory
         */
        function (cb) {
          RecipeCategory.create({
            name: 'Sweet desserts',
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeCategory.create({
            name: 'Dessert',
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeCategory.create({
            name: 'Italian',
            recipeId: 2
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * RecipeMainPhoto
         */
        function (cb) {
          RecipeMainPhoto.create({
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeMainPhoto.create({
            recipeId: 2
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * ProfileFollow
         */
        function (cb) {
          ProfileFollow.create({
            profileFollowerId: 1,
            profileFollowedId: 3
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * RecipeComment
         */
        function (cb) {
          RecipeComment.create({
            message: 'This is so tasty :P',
            profileId: 2,
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * RecipeStep
         */
        function (cb) {
          RecipeStep.create({
            order: 1,
            step: 'Preheat oven to 425 degrees F (220 degrees C).',
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeStep.create({
            order: 2,
            step: 'Melt butter in a large skillet over medium heat. Cook and stir onion, flour, salt, and pepper in melted butter until the onion is translucent, about 5 minutes.',
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * RecipeLike
         */
        function (cb) {
          RecipeLike.create({
            profileId: 1,
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeLike.create({
            profileId: 1,
            recipeId: 2
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeLike.create({
            profileId: 2,
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          RecipeLike.create({
            profileId: 3,
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * Ingredient
         */
        function (cb) {
          Ingredient.create({
            quantity: '2 tablespoons',
            name: 'vegetable oil',
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Ingredient.create({
            quantity: '1/4 cup',
            name: 'salsa',
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Ingredient.create({
            quantity: '1',
            name: 'egg',
            optional: true,
            recipeId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Ingredient.create({
            quantity: '1/2 cup diced',
            name: 'onion',
            recipeId: 2
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        /**
         * Feedback
         */
        function (cb) {
          Feedback.create({
            subject: 'Great app',
            description: 'This is an awesome great cooking application :D',
            profileId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
        function (cb) {
          Feedback.create({
            subject: 'Suggestion',
            description: 'You can show scored points on the profile detail',
            profileId: 1
          }, function (err) {
            errorHandlerService.printError(err);
            cb();
          });
        },
      ],
      function () {
        console.log('All models seeded!');
      });
    });

    console.log('Auto migration completed!');
  }
};
