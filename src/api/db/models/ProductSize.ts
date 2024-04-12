// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";

export class ProductSize extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public size_id!: number;
  public product_id!: number;
}

export function initializeProductSize(sequelize: Sequelize) {
  ProductSize.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      size_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'sizes',
            key: 'id'
        }
      },
      product_id: {
        type: DataTypes.FLOAT,
        allowNull: false,
        references:{
            model: 'products',
            key: 'id'
        } 
     },
    },
    {
      sequelize,
      tableName: "products_sizes",
      timestamps: false,
    }
  );
  return ProductSize;
}
