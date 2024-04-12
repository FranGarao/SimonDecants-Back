// Importa Sequelize
import { Sequelize } from "sequelize";
import { initializeProduct } from "./models/Product";
import { initializeUserLocation } from "./models/UserLocation";
import { initializeUser } from "./models/User";
import { initializeTransaction } from "./models/Transaction";
import { initializeTransactionDetail } from "./models/TransactionDetail";
import { initializeSize } from "./models/Size";
import { initializeGuestUser } from "./models/GuestUser";
import { initializeCategory } from "./models/Category";
import { initializeGender } from "./models/Gender";
import { initializeProductSize } from "./models/ProductSize";
import { initializeStatus } from "./models/Status";

// Crea una nueva instancia de Sequelize
const sequelize = new Sequelize("simon_decants", "root", "26deoctubrE26", {
  host: "127.0.0.1",
  port: 6666,
  dialect: "mysql",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();

export const models = {
  Product: initializeProduct(sequelize),
  UserLocation: initializeUserLocation(sequelize),
  Transaction: initializeTransaction(sequelize),
  TransactionDetail: initializeTransactionDetail(sequelize),
  Size: initializeSize(sequelize),
  GuestUser: initializeGuestUser(sequelize),
  User: initializeUser(sequelize),
  Category: initializeCategory(sequelize),
  Gender: initializeGender(sequelize),
  ProductSize: initializeProductSize(sequelize),
  Status: initializeStatus(sequelize),
  // Añadir los modelos que se creen aquí
};

//TODO: Verificar si es necesario inicializar las relaciones
// Establecer las relaciones
models.Product.hasMany(models.TransactionDetail, {
  sourceKey: "id",
  foreignKey: "product_id",
  as: "transactionDetails", // alias para la relación
});

models.TransactionDetail.belongsTo(models.Product, {
  targetKey: "id",
  foreignKey: "product_id",
  as: "product", // alias para la relación
});

models.User.hasMany(models.Transaction, {
  sourceKey: "id",
  foreignKey: "user_id",
  as: "transactions", // alias para la relación
});

models.Transaction.belongsTo(models.User, {
  targetKey: "id",
  foreignKey: "user_id",
  as: "user", // alias para la relación
});

models.User.hasMany(models.UserLocation, {
  sourceKey: "id",
  foreignKey: "user_id",
  as: "userLocations", // alias para la relación
});

models.UserLocation.belongsTo(models.User, {
  targetKey: "id",
  foreignKey: "user_id",
  as: "user", // alias para la relación
});

models.Transaction.hasMany(models.TransactionDetail, {
  sourceKey: "id",
  foreignKey: "transaction_id",
  as: "transactionDetails", // alias para la relación
});

models.TransactionDetail.belongsTo(models.Transaction, {
  targetKey: "id",
  foreignKey: "transaction_id",
  as: "transaction", // alias para la relación
});

models.Size.hasMany(models.Product, {
  sourceKey: "id",
  foreignKey: "size_id",
  as: "sizeProducts", // alias para la relación
});

models.Product.belongsTo(models.Size, {
  targetKey: "id",
  foreignKey: "size_id",
  as: "size", // alias para la relación
});

models.User.hasMany(models.GuestUser, {
  sourceKey: "id",
  foreignKey: "user_id",
  as: "guestUsers", // alias para la relación
});

models.GuestUser.belongsTo(models.User, {
  targetKey: "id",
  foreignKey: "user_id",
  as: "user", // alias para la relación
});

models.Product.belongsToMany(models.Category, {
  through: "ProductCategory",
  foreignKey: "product_id",
  as: "categories", // alias para la relación
});

models.Category.belongsToMany(models.Product, {
  through: "ProductCategory",
  foreignKey: "category_id",
  as: "products", // alias para la relación
});

models.Product.belongsToMany(models.Gender, {
  through: "ProductGender",
  foreignKey: "product_id",
  as: "genders", // alias para la relación
});

models.Gender.belongsToMany(models.Product, {
  through: "ProductGender",
  foreignKey: "gender_id",
  as: "products", // alias para la relación
});

// Añadir las relaciones adicionales aquí

export default sequelize;

//!FRAN
// import { Sequelize } from "sequelize";

// const sequelizeInstance = new Sequelize(
//   "simon_decants",
//   "fran",
//   "26deoctubrE26",
//   {
//     host: "127.0.0.1",
//     dialect: "mysql"
//   }
// );

//!MARIAN
// export { sequelizeInstance };

// const sequelizeInstance = new Sequelize(
//   "simon_decants",
//   "root",
//   "",
//   {
//     host: "127.0.0.1",
//     dialect: "mysql"
//   }
// );

// export { sequelizeInstance };
