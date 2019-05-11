const User = require('../../../Models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};