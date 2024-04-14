// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";


export class Category extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
}

export function initializeCategory(sequelize: Sequelize) {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
      sequelize,
      tableName: "categories",
      timestamps: false,
    }
  );

  return Category;
}
