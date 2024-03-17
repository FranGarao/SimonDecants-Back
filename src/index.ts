import express, { Request, Response } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const API = process.env.API || "/api";
import cookieParser from "cookie-parser";
import session from "express-session";
const bodyParser = require("body-parser");

/*Import Routes*/
import usersRoutes from "./api/routes/users.routes";
import productsRoutes from "./api/routes/products.routes";

/*Middlewares*/
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.get("/set-cookie", (_req: Request, res: Response) => {
  res.cookie("qeqeqeqe", "this is a cookie", {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    domain: "localhost",
    path: "/",
    secure: false,
    httpOnly: false,
  });
  res.send("Cookie is set");
});
app.use(
  session({
    secret: "26deoctubrE26",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      domain: "localhost",
      path: "/",
      secure: false,
    },
  })
);
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
