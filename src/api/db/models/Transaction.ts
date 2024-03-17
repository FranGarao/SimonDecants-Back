// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";

export class Transaction extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public user_id!: number;
  public transaction_date!: Date;
  public transaction_total!: number;
}

export function initializeTransaction(sequelize: Sequelize) {
  Transaction.init(
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
      transaction_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transaction_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "transactions", // Set the table name to "transaction_details"
      timestamps: false,
    }
  );

  return Transaction;
}
