import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
import { initializeUserLocation } from "../db/models/UserLocation";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// import { Location } from "../interfaces/Location";
import { User } from "../interfaces/User";
// import { Users } from "../interfaces/users";
const User = initializeUser(sequelizeInstance);
const UserLocation = initializeUserLocation(sequelizeInstance);

export class UsersService {
  checkUserRegistered = async (normal_email: string) => {
    const user = await User.findOne({ where: { normal_email }, raw: true });
    return user;
  };
  getUsers = async () => {
    const users = await User.findAll({ raw: true });
    return users;
  };
  createOne = async (userData: any) => {
    const hashedPw = bcrypt.hashSync(userData.password, 11);
    const normalEmail = userData.email.toUpperCase();
    const user = "user";
    const newUser: any = {
      name: userData.name,
      last_name: userData.last_name,
      email: userData.email,
      normal_email: normalEmail,
      password: hashedPw,
      phone: userData.phone,
      type: user,
    };

    const userRegistered = await this.checkUserRegistered(newUser.normal_email);
    if (userRegistered) {
      throw new Error("User already registered");
    }
    const createdUser = await User.create(newUser);
    const newLocation = {
      user_id: createdUser.id,
      province: userData.province,
      city: userData.city,
      address: userData.address,
      address_number: userData.address_number,
      cp: userData.cp,
    };

    const location = await this.createLocation(newLocation);
    return { user: createdUser, location };
  };
  createLocation = async (newLocation: any) => {
    const location: any = await UserLocation.create(newLocation);
    return location;
  };
  login = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email }, raw: true });
    const validPw = bcrypt.compareSync(password, user?.password);
    if (validPw) {
      return user;
    } else {
      return { error: true, message: "Invalid password" };
    }
  };
  logOut = async () => {};
  getLocations = async () => {
    const locations = await UserLocation.findAll({
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
      httpOnly: false, // Set httpOnly to true for security reasons (prevents client-side JavaScript from accessing the cookie)

      // secure: process.env.NODE_ENV === 'production' // Uncomment this line in production to ensure cookies are sent over HTTPS
    };

    res.cookie("token", token, cookieOptions);
    req.session.user = user;
  };
}
