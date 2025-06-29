"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      Product.belongsTo(models.Manufacturer, {
        foreignKey: "manufacturerId",
        as: "manufacturer",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      originalPrice: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      reviews: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      manufacturerId: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      isSale: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
