/**
 * Actor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'actors',
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'string',
    },

    movies: {
      collection: 'movie',
      via: 'actors'
    }
  },

};

