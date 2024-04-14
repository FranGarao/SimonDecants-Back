// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";


export class Gender extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public gender!: string;
}

export function initializeGender(sequelize: Sequelize) {
  Gender.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      gender:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
      sequelize,
      tableName: "gender",
      timestamps: false,
    }
  );

  return Gender;
}
