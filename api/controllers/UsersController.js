/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


module.exports = {


  register: async (req, res) => {
    const emailFound = await User.findOne({
        email: req.body.email
      })
      .catch((err) => {
        res.status(404);
        return res.send({
          'message': `Error: ${err}`,
        });
      });

    if (emailFound) {
      res.status(404);
      return res.send({
        'message': 'Email Already Registered',
        'email': emailFound
      });
    }

    const salt = await bcrypt.genSalt(6);
    const password = await bcrypt.hash(req.body.password, salt);

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: password.toString(),
      }).then((data) => {
        res.status(201);
        return res.send({
          'message': `User created succesfully`,
          'data': data,
          'password': password,
        });
      })
      .catch(err => {
        res.status(404);
        return res.send({
          'message': `Error: ${err}`,
        });
      });

  },

  login: async (req, res) => {
    User.findOne({
      email: req.body.email
    })
      .then(data => {
        if (!data || data.length === 0) {
          res.status(404);
          return res.json({
            'message': 'User not found'
          });
        } else {

          //Validate Password
          bcrypt.compare(req.body.password, data.password)
          .then((result)=>{
            if (result!==true) {
              res.status(403);
              return res.json({
                'message': 'Wrong Password'
              });
            }
          });


          const token = jwt.sign({
            name: data.name,
            id: data.id
          }, process.env.SECRET_KEY);

          if(req.body.password !== null){
            res.status(200);
            return res.json({
              message: 'User found',
              data: token,
            });
          }
          else{
            res.status(403);
            return res.json({
              'message': 'Wrong Password'
            });
          }
        }
      })
      .catch((err) => {
        res.status(400);
        return res.json({
          'message': `Error: ${err}`,
        });
      });
  },

};
