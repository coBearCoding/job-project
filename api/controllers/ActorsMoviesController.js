/**
 * ActorsMoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getAll: (req, res)=>{
    var sql = 'SELECT * FROM actor_movies__movie_actors as am '+
    'INNER JOIN actors as a ON am.actor_movies = a.id '+
    'INNER JOIN movies as m ON am.movie_actors = m.id';

    sails.sendNativeQuery(sql, ['name'], (err, rawResult)=>{
      if(err){
        res.status(400);
        return res.send({
          'message': `Record not found: ${err}`
        });
      }

      res.status(200);
      return res.send({
        'message': rawResult
      });
    });
  },

  post: (req, res)=>{
    sails.log.debug(`${req.allParams()} - ${req.allParams()}`);
    Actor.addToCollection(req.allParams().id_actor, 'movies', req.allParams().id_movie)
    .then(()=>{
      sails.log.debug(`Actor and Movie Assigned`);
      res.status(201);
      return res.send({
        'message': `Actor and Movie Assigned`,
      });
    })
    .catch((error)=>{
      sails.log.debug(error);
      res.status(400);
      return res.send({
        'message': `Error ${error}`
      });
    });
  }
};

