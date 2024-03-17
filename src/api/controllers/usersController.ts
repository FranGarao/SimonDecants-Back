import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import { User } from "../interfaces/User";
const bcrypt = require("bcrypt");
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
    const hashedPw = bcrypt.hashSync(req.body.password, 11);
    const normalEmail = req.body.email.toUpperCase();
    const user = "user";
    const newUser: User = {
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      normal_email: normalEmail,
      password: hashedPw,
      phone: req.body.phone,
      type: user,
    };
    const userRegistered = await userServiceInstance
      .checkUserRegistered(newUser.normal_email)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });

    if (userRegistered) {
      res.status(400).json({ message: "User already registered" });
      return;
    } else {
      userServiceInstance
        .createOne(newUser)
        .then((user) => {
          const newLocation = {
            user_id: user.id,
            province: req.body.province,
            city: req.body.city,
            address: req.body.address,
            address_number: req.body.address_number,
            cp: req.body.cp,
          };
          userServiceInstance
            .createLocation(newLocation)
            .then((location) => {
              res.json({ user, location });
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ message: "Internal server error" });
            });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        });
    }
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
