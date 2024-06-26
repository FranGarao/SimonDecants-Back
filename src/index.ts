import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const API = process.env.API || "/api";

/*Import Routes*/
import usersRoutes from "./api/routes/users.routes";
import productsRoutes from "./api/routes/products.routes";

/*Middlewares*/
app.use(express.json());
app.use(cors());

/*Routes*/
//users
app.use(`${API}/users`, usersRoutes);
//products
app.use(`${API}/products`, productsRoutes);

/*Inicializar el servidor*/
app.listen(
  PORT,
  /*0.0.0.0 ,*/ () => {
    console.log(`Server is running on http://localhost:${PORT}\n :)`);
  }
);
