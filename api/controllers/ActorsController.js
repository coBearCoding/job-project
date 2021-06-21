/**
 * ActorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getAll: (req, res)=>{
    Actor.find()
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
    Actor.findOne(req.body.id)
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
    Actor.create({
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age
    })
    .fetch()
    .then((actor)=>{
      sails.log.debug(`Actor created: ${actor.name}`);
      res.status(201);
      return res.send({
        'message': `Actor created: ${actor.name} ${actor.lastName}`,
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
    Actor.destroyOne(req.body.id)
    .then(()=>{
      res.status(201);
      return res.send({
        'message': `Actor Eliminated`,
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

