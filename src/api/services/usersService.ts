const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { Location } from "../interfaces/Location";
import { User } from "../interfaces/User";
// import { Users } from "../interfaces/users";
import { models } from "../db/dbInstance";

class UsersService {
  checkUserRegistered = async (normal_email: string) => {
    const user = await models.User.findOne({
      where: { normal_email },
      raw: true,
    });
    return user;
  };
  getUsers = async () => {
    const users = await models.User.findAll({ raw: true });
    return users;
  };
  createOne = async (newUserData: User) => {
    try {

      const hashedPw = bcrypt.hashSync(newUserData.password, 11);
      const normalEmail = newUserData.email.toUpperCase();
      const user = "user";

      //TODO Crear interfaz para newUser
      const newUser: any = {
        id: newUserData.id,
        name: newUserData.name,
        last_name: newUserData.last_name,
        email: newUserData.email,
        normal_email: normalEmail,
        password: hashedPw,
        phone: newUserData.phone,
        type: user,
      };
      console.log(newUser);

      const userRegistered = await this.checkUserRegistered(newUser.normal_email);
      if (userRegistered) {
        throw new Error("User already registered");
      }
      const createdUser = await models.User.create(newUser);

      const newLocation: Location = {
        id: newUserData.location.id,
        user_id: createdUser.id,
        province: newUserData.location.province,
        city: newUserData.location.city,
        address: newUserData.location.address,
        address_number: newUserData.location.address_number,
        zip_code: newUserData.location.zip_code,
      };
      console.log(newLocation, newUser);

      const location = await this.createLocation(newLocation);


      return { user: createdUser, location };
    } catch (error) {
      console.log({ error });
      return error;
    }
  };
  createLocation = async (newLocation: any) => {
    try {


      console.log(newLocation);

      const location: any = await models.UserLocation.create(newLocation);
      return location;
    } catch (error) {
      console.log({ error });
      return error;
    }
  };
  login = async (email: string, password: string) => {
    const user = await models.User.findOne({ where: { email }, raw: true });
    const validPw = bcrypt.compareSync(password, user?.password);
    if (validPw) {
      return user;
    } else {
      return { error: true, message: "Invalid password" };
    }
  };
  logOut = async () => { };
  getLocations = async () => {
    const locations = await models.UserLocation.findAll({
      raw: true,
    });
    return locations;
  };
  setCookies = async (req: any, res: any, user: any) => {
    // Genero el JWT
    // if (req.body.remember) {
    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "365d",
    });
    const cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      domain: "localhost",
      path: "/",
      secure: false,
      httpOnly: false,
      // Set httpOnly to true for security reasons (prevents client-side JavaScript from accessing the cookie)

      // secure: process.env.NODE_ENV === 'production' // Uncomment this line in production to ensure cookies are sent over HTTPS
    };

    res.cookie("token", token, cookieOptions);
    req.session.user = user;
  };
}

export const usersService = new UsersService();
