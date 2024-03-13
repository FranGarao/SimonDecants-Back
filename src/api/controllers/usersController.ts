import { Request, Response } from "express";
import { userService } from "../services/usersService";

const userServiceInstance = new userService();

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userServiceInstance.getUsers();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
