/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'POST /api/add-actor': 'ActorsController.post',
  'GET /api/actors': 'ActorsController.getAll',
  'POST /api/actor': 'ActorsController.getOne',
  'DELETE /api/delete-actor': 'ActorsController.destroy',

  'POST /api/add-movie': 'MoviesController.post',
  'GET /api/movies': 'MoviesController.getAll',
  'POST /api/movie': 'MoviesController.getOne',
  'PUT /api/update-movie': 'MoviesController.put',
  'DELETE /api/delete-movie': 'MoviesController.destroy',

  'POST /api/add-actor-movie': 'ActorsMoviesController.post',
  'GET /api/actors-movies': 'ActorsMoviesController.getAll',

  'POST /api/user/login': 'UsersController.login',
  'POST /api/user/register': 'UsersController.register',

};
