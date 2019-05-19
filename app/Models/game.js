'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    letters: DataTypes.STRING,
    playersId: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Word, {
      foreignKey: 'wordId',
      onDelete: 'CASCADE',
    });
  };
  return Game;
};

//['a', 's' 'e', 'c']
//[1, 5, 77, 87]