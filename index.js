
/**
 * Module dependencies.
 */

var url = require('url')
  , qs = require('querystring')

/**
 * Helpers method
 *
 * @param {String} name
 * @return {Function}
 * @api public
 */

function helpers (name) {
  return function (req, res, next) {
    res.locals.req = req;
    /**
    * Test if request is authenticated.
    *
    * @return {Boolean}
    * @api public
    */
    res.locals.isAuthenticated = function () {
      return req.isAuthenticated();
    };
    /**
    * Test if request is unauthenticated.
    *
    * @return {Boolean}
    * @api public
    */
    res.locals.isUnauthenticated = function () {
      return !req.isAuthenticated();
    };
    
    next();
  };
}

module.exports = helpers;
