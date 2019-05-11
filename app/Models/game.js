'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    letters: DataTypes.STRING,
    playersId: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Game.hasMany(models.Word, {
      foreignKey: 'wordId',
      onDelete: 'CASCADE',
    });
  };
  return Game;
};