// Importa Sequelize
import { Sequelize } from "sequelize";

// Crea una nueva instancia de Sequelize
const sequelizeInstance = new Sequelize(
  "simon_decants",
  "root",
  "",
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

export { sequelizeInstance };

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
