// import { Session } from "express-session";
import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
// import { User } from "../interfaces/User";
import { User } from "../db/models/User";

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
    userServiceInstance
      .createOne(req.body)
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
  login = async (req: any, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    userServiceInstance
      .login(email, password)
      .then((user) => {
        if (user && "id" in user) {
          res.json(user);
        }
        // }
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
  logOut = async (req: any, res: Response) => {
    req.session.destroy((error: any) => {
      if (error) {
        console.log("Error al cerrar sesion", error);
      } else {
        res.clearCookie("token");
        res.json({ message: "Logged out" });
      }
    });
  };
  setCookies = async (req: any, res: Response) => {
    const userLogin = await User.findByPk(18);
    userServiceInstance.setCookies(req, res, userLogin);
    res.json({ message: "Cookies set" });
  };
}
