const path = require('path');
const BaseController = require('../BaseController');
const passport = require('passport');
var User = require('../../../Models/index').User;
const jwtSecret = require('../../../../config/jwtConfig')
const jwt = require('jsonwebtoken')

/**
 * The Base controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
class UserController extends BaseController {
   /**
    * @param {Model} model The default model object
    * for the controller. Will be required to create
    * an instance of the controller
    */
   constructor(model) {
      super(model);
   }

   /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
   create(req, res, next) {
      //console.log(req.body);
      return User.findOne({
         where: {
            username: req.body.username
         }
      }).then(function (user) {
         if (Array.isArray(user) || user || user != null) {
            console.log(user)
            passport.authenticate('local', (err, user, info) => {
               // console.log('Inside passport.authenticate() callback');
               // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
               // console.log(`req.user: ${JSON.stringify(req.user)}`)
               req.login(user, (err) => {
                  User.findOne({
                     where: {
                        username: req.body.username
                     }
                  }).then(user => {
                     const token = jwt.sign({
                        id: user.username
                     }, jwtSecret.secret)
                     return res.status(200).send({
                        auth: true,
                        token: token,
                        message: 'User logged in',
                        url: '/game/loading'
                     })
                  })
               })
            })(user, req, res, next)
         } else {
            return User.create({
               username: req.body.username
            }).then((user) => {
               passport.authenticate('local', (err, user, info) => {
                  // console.log('Inside passport.authenticate() callback');
                  // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
                  // console.log(`req.user: ${JSON.stringify(req.user)}`)
                  req.login(user, (err) => {
                     User.findOne({
                        where: {
                           username: req.body.username
                        }
                     }).then(user => {
                        const token = jwt.sign({
                           id: user.username
                        }, jwtSecret.secret)
                        return res.status(200).send({
                           auth: true,
                           token: token,
                           message: 'User logged in',
                           url: '/game/loading'
                        })
                     })
                  })
               })(user, req, res, next)
            })
         }
      })
   }
}

module.exports = UserController;