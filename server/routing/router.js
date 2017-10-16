'use strict';

let recipeController = require('./api/recipe.controller');

/**
 * Groups all route controllers of the app.
 *
 * @param app Server application instance
 */
module.exports = function (app) {

  /**
   * Set common attributes.
   */
  app.use(function (req, res, next) {
    return next();
  });

  recipeController(app);

};
