'use strict';

let asyncSeries = require('async/series');

let errorHandlerService = require('./../services/errorHandler.service');

module.exports = function (app) {

  let resetDB = true;
  let seedDB = true;

  let Profile = app.models.Profile;
  let Recipe = app.models.Recipe;
  let RecipeCategory = app.models.RecipeCategory;
  let RecipeMainPhoto = app.models.RecipeMainPhoto;

  if (resetDB) {

    app.dataSources.cookallMysql.automigrate(function () {

      if (seedDB) {
        // Create models
        asyncSeries([
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
            Recipe.create({
              title: 'Iced Pumpkin Cookies',
              description: 'Wonderful spicy iced pumpkin cookies that both kids and adults love!',
              cookingTime: '1 h 20 m',
              calories: 122,
              userId: 1
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
              userId: 2
            }, function (err) {
              errorHandlerService.printError(err);
              cb();
            });
          },
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
              name: 'Italian',
              recipeId: 2
            }, function (err) {
              errorHandlerService.printError(err);
              cb();
            });
          },
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
          }
        ],
        function () {
          console.log('All models seeded!');
        });
      }
    });

    console.log('Auto migration completed!');
  }
};
