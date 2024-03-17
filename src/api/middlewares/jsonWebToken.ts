const jwt = require("jsonwebtoken");
import { Request, Response } from "express";

function authenticateToken(
  req: Request & { user?: any },
  res: Response,
  next: any
): any {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    return next(); // pass the execution off to whatever request the client intended
  });
}
