const jwt = require("jsonwebtoken");
import { Request, Response } from "express";
import { User } from "../interfaces/User";

//!Si rompe verificar el tipado de User
function authenticateToken(
  req: Request & { user?: User },
  res: Response,
  next: any
): any {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: User) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    return next(); // pass the execution off to whatever request the client intended
  });
}

export default authenticateToken;
