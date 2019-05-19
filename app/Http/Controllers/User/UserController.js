
const BaseController = require('../BaseController');
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
   create(req, res) {
      console.log(req.body);
      return User
        .create({
          username: req.body.username,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
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