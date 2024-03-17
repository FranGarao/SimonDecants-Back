import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
import { initializeUserLocation } from "../db/models/UserLocation";
// import { Users } from "../interfaces/users";
const User = initializeUser(sequelizeInstance);
const UserLocation = initializeUserLocation(sequelizeInstance);

export class UsersService {
  getUsers = async () => {
    const users = await User.findAll({ raw: true });
    return users;
  };
  createOne = async (newUser: any) => {
    const user = await User.create(newUser);
    return user;
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
  // };
}
