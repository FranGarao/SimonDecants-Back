import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
import { initializeUserLocation } from "../db/models/UserLocation";
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
  createOne = async (newUser: any) => {
    const user = await User.create(newUser);
    return user;
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
