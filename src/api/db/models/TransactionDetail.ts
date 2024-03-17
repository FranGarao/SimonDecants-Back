// En tu archivo de modelo
import { Sequelize, DataTypes, Model } from "sequelize";

export class TransactionDetail extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public transaction_id!: number;
  public product_id!: number;
  public quantity!: number;
  public unit_price!: number;
  public discount!: number;
  public tax!: number;
  public total!: number;
}

export function initializeTransactionDetail(sequelize: Sequelize) {
  TransactionDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      tax: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "transactions_details",
      timestamps: false,
    }
  );

  return TransactionDetail;
}
