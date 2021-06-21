/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,


  ActorsController:{
    getAll: 'isAuthenticated',
    getOne: 'isAuthenticated',
    post: 'isAuthenticated',
  },

  MoviesController:{
    getAll: 'isAuthenticated',
    getOne: 'isAuthenticated',
    post: 'isAuthenticated',
    put: 'isAuthenticated',
    destroy: 'isAuthenticated',
  },

  ActorsMoviesController:{
    getAll: 'isAuthenticated',
    getOne: 'isAuthenticated',
    post: 'isAuthenticated',
    destroy: 'isAuthenticated',
  },
};
