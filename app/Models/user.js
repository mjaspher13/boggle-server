'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Game, {
      foreignKey: 'gameId',
      as: 'Games',
    });
    User.hasMany(models.word, {
      foreignKey: 'wordId',
      as: 'Words',
    });
  };
  return User;
};
