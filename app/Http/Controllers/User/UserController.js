const path = require('path');
const BaseController = require('../BaseController');
const passport = require('passport');
var User = require('../../../Models/index').User;
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
         where:{
            username: req.body.username
         }
      }).then(function(user) {
         if(Array.isArray(user) || user || user != null){
            console.log(user)
            passport.authenticate('local', (err, user, info) => {
               // console.log('Inside passport.authenticate() callback');
               // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
               // console.log(`req.user: ${JSON.stringify(req.user)}`)
               req.login(user, (err) => {
                  // console.log('Inside req.login() callback')
                  // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
                  // console.log(`req.user: ${JSON.stringify(req.user)}`)
                  return res.status(200).send('ALready Exist & logged in!\n');
               })
            })(user, req, res, next)
         }
         else{
            return User.create({
               username : req.body.username
            }).then((user) => {
               passport.authenticate('local', (err, user, info) => {
                  // console.log('Inside passport.authenticate() callback');
                  // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
                  // console.log(`req.user: ${JSON.stringify(req.user)}`)
                  req.login(user, (err) => {
                     // console.log('Inside req.login() callback')
                     // console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
                     // console.log(`req.user: ${JSON.stringify(req.user)}`)
                     return res.status(200).send('ALready Exist & logged in!\n');
                  })
               })(user, req, res , next)})
         }
      })
      // return User
      //    .findOrCreate({
      //       where: {
      //          username: req.body.username,
      //       },
      //       defaults: {
      //          username: req.body.username
      //       },
      //    })
      //    .then(function () {
      //          console.log('Inside POST /login callback')
               
      //       }
      //       //user => res.status(201).send(user)
      //    )
      //    .catch(error => res.status(400).send(error));
   }

   auth(user, req, res, next){
     
      (req, res, next);
   }
}

module.exports = UserController;
// const User = require('../../../Models').User;

// module.exports = {
//   create(req, res) {
//     return User
//       .create({
//         username: req.body.username,
//       })
//       .then(todo => res.status(201).send(todo))
//       .catch(error => res.status(400).send(error));
//   },
// };