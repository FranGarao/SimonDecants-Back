"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
  const alias = "User";
  const cols = {
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize_1.DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: sequelize_1.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize_1.DataTypes.STRING,
      allowNull: false,
    },
    normal_email: {
      type: sequelize_1.DataTypes.STRING,
    },
    password: {
      type: sequelize_1.DataTypes.STRING,
      allowNull: false,
    },
    cp: {
      type: sequelize_1.DataTypes.STRING,
      allowNull: false,
    },
    // phone: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  };
  const config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);
  return User;
};
