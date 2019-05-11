'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    word: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Word.associate = function(models) {
    Word.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Word.belongsTo(models.Game, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE',
    });
  };
  return Word;
};