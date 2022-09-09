// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      },
    
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Product:{
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, 
      },


    }

    }
    
      //refer to read me to make category_id for each listed thing.
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
