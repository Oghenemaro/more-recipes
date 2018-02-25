

'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorites', {
    recipeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });
        
    favorite.associate = (models) => {
        favorite.belongsTo(models.users, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
        });
    };
      favorite.associate = (models) => {
        favorite.belongsTo(models.recipes, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
        });
    };

  return favorite;
};

