// Importa Sequelize
import { Sequelize } from "sequelize";

// Crea una nueva instancia de Sequelize
const sequelizeInstance = new Sequelize(
  "simon_decants",
  "root",
  "",
  {
    host: "127.0.0.1",
    dialect: "mysql"
  }
);

export { sequelizeInstance };
