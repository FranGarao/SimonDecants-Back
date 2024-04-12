// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";


export class Status extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;
}

export function initializeStatus(sequelize: Sequelize) {
  Status.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
      sequelize,
      tableName: "status",
      timestamps: false,
    }
  );

  return Status;
}
