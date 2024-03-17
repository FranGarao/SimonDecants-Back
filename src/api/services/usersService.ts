import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
import { initializeUserLocation } from "../db/models/UserLocation";
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
    const user = await User.findOne({ where: { email, password }, raw: true });
    if (user) {
      console.log(user);
      return user;
    } else {
      return { error: true, message: "User not found" };
    }
  };
  // setLocations = async (id: number) => {
  getLocations = async () => {
    const locations = await UserLocation.findAll({
      raw: true,
    });
    return locations;
  };
}

// login: (req, res) => {
//   const userInJson = model.findByEmail(req.body.email);
//   //caso de que el mail no este registrado
//   if (!userInJson) {
//     return res.redirect("/user/login?error=Email no registrado");
//   }

//aca deshasheamos la contrasenia y la comparamos con la ingresada
//   console.log(req.body.password, userInJson.password);
//   const validPw = bcrypt.compareSync(req.body.password, userInJson.password);
//   if (validPw) {
//     // es lo mismo que poner solo req.body.on (porque si es !== "on" seria undefinded)
//     if (req.body.remember === "on") {
//       //creamos una cookie, guardamos el id del usuario y hacemos que expire en un anio
//       res.cookie("email", userInJson.email, {
//         maxAge: 1000 * 60 * 60 * 24 * 365,
//       });
//     }

//     req.session.user = userInJson;
//     res.redirect("/products");
//   } else {
//     res.redirect("/user/login?error=Password incorrecta");
//   }
// },
// close: (req, res, next) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.log("Error al cerrar sesion:", err);
//       res.sendStatus(500);
//     } else {
//       res.clearCookie("email");
//       res.redirect("/products");
//     }
//   });
// },
