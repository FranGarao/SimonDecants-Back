// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";
// import { User } from "./User";

export class UserLocation extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public user_id!: number;
  public province!: string;
  public city!: string;
  public address!: string;
  public address_number!: number;
  public cp!: string;
}

export function initializeUserLocation(sequelize: Sequelize) {
  UserLocation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users_locations",
      timestamps: false,
    }
  );
  //   UserLocation.belongsTo(User, { foreignKey: "user_id" });
  return UserLocation;
}
