//recipe model


'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipes', {
    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
        

    recipe.associate = (models) => {
      recipe.belongsTo(models.users, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
      });
    };
  
    recipe.associate = (models) => {
      recipe.hasMany(models.favorites, {
           foreignKey: 'id',
      });
        
    };
  
    recipe.associate = (models) => {
      recipe.hasMany(models.vote, {
           foreignKey: 'id',
      });
        
    };
  
    recipe.associate = (models) => {
      recipe.hasMany(models.reviews, {
           foreignKey: 'id',
      });
        
    };

  return recipe;
};

