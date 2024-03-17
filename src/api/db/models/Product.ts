// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";

export class Product extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;
  public category!: string;
  public gender!: string;
  public img!: string;
  public description!: string;
  public status!: string;
  public discount!: number;
  public brand!: string;
  public size_id!: number;
}

export function initializeProduct(sequelize: Sequelize) {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "products",
      timestamps: false,
    }
  );

  return Product;
}
