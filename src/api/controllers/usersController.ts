import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import { User } from "../interfaces/User";
// const jwt = require("jsonwebtoken");

const userServiceInstance = new UsersService();

export class usersController {
  getUsers = async (_req: Request, res: Response) => {
    userServiceInstance
      .getUsers()
      .then((users) => {
        res.json(users);
      })
      .catch((error: any) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  createOne = async (req: Request, res: Response) => {
    const newUser: User = {
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      normal_email: req.body.normal_email,
      password: req.body.password,
      location: {
        address: req.body.address,
        address_number: req.body.address_number,
        city: req.body.city,
        province: req.body.province,
        cp: req.body.cp,
      },
      phone: req.body.phone,
    };
    userServiceInstance
      .createOne(newUser)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  login = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    userServiceInstance
      .login(email, password)
      .then((user) => {
        if (user) {
          //Genero el JWT
          // const token = jwt.sign({ user }, process.env.JWT_SECRET,
          res.json(user);
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  getLocations = async (_req: Request, res: Response) => {
    userServiceInstance
      .getLocations()
      .then((locations) => {
        res.json(locations);
      })
      .catch((error) => {
        console.error({ error });
        res.status(500).json({ message: "Internal server error" });
      });
  };
}
