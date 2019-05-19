//import ....;
/**
 * The Base controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
class BaseController {
   /**
    * @param {Model} model The default model object
    * for the controller. Will be required to create
    * an instance of the controller
    */
   constructor(model) {
      this._model = model;
      this.create = this.create.bind(this);
   }

   /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
   create(req, res, next) {
         return this._model
           .create({
             username: req.body.username,
           })
           .then(model => res.status(201).send(model))
           .catch(error => res.status(400).send(error));
         }
}

module.exports = BaseController;