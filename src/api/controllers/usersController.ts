import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
const User = initializeUser(sequelizeInstance);

import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    if (!User) {
      console.error("User model is undefined or null");
      res.status(500).json({
        message: "Internal server error: User model is undefined or null",
      });
      return;
    }

    const users = await User.findAll({ raw: true });
    console.log(users);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
