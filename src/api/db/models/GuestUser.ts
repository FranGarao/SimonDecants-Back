// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";

export class GuestUser extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public last_name!: string;
  public email!: string;
  public phone!: string;
  public province!: string;
  public city!: string;
  public address!: string;
  public address_number!: number;
  public cp!: string;
}

export function initializeGuestUser(sequelize: Sequelize) {
  GuestUser.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
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
      tableName: "guest_users",
      timestamps: false,
    }
  );

  return GuestUser;
}
