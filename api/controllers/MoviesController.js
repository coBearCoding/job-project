/**
 * MoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getAll: (req, res)=>{
    Movie.find()
    .then(data => {
      if (!data || data.length === 0){
        res.status(404);
        return res.send({
          'message': 'Records not found'
        });
      }else{
        res.status(200);
        return res.send({
          'message': 'Record found',
          'data': data
        });
      }
    })
    .catch((err) => {
      res.status(400);
      return res.send({
        'message': `Error: ${err}`
      });
    });
  },

  getOne: (req, res)=>{
    Movie.findOne(req.body.id)
    .then(data => {
      if (!data || data.length === 0){
        res.status(404);
        return res.send({
          'message': 'Records not found'
        });
      }else{
        res.status(200);
        return res.send({
          'message': 'Record found',
          'data': data
        });
      }
    })
    .catch((err) => {
      res.status(400);
      return res.send({
        'message': `Error: ${err}`
      });
    });
  },

  post: (req, res)=>{
    Movie.create({
      year: req.body.year,
      title: req.body.title,
      description: req.body.description
    })
    .fetch()
    .then((movie)=>{
      sails.log.debug(`Movie created: ${movie.title}`);
      res.status(201);
      return res.send({
        'message': `Movie created: ${movie.title}`,
      });
    })
    .catch((error)=>{
      sails.log.debug(error);
      res.status(400);
      return res.send({
        'message': `Error ${error}`
      });
    });
  },

  put: (req, res)=>{
    Movie.updateOne({
      id: req.body.id
    })
    .set({
      year: req.body.year,
      title: req.body.title,
      description: req.body.description
    })
    .then((movie)=>{
      sails.log.debug(`Movie updated: ${movie.title}`);
      res.status(201);
      return res.send({
        'message': `Movie updated: ${movie.title}`,
      });
    })
    .catch((error)=>{
      sails.log.debug(error);
      res.status(400);
      return res.send({
        'message': `Error ${error}`
      });
    });
  },

  destroy: (req, res)=>{
    Movie.destroyOne(req.body.id)
    .then(()=>{
      res.status(201);
      return res.send({
        'message': `Movie Eliminated`,
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

