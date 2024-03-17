// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";

export class Size extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public size!: number;
  public price!: number;
}

export function initializeSize(sequelize: Sequelize) {
  Size.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "sizes",
      timestamps: false,
    }
  );

  return Size;
}
