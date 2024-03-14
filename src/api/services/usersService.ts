import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
// import { Users } from "../interfaces/users";
const User = initializeUser(sequelizeInstance);

export class userService {
  getUsers = async () => {
    const users = await User.findAll({ raw: true });
    return users;
  };
  createOne = async (newUser: any) => {
    const user = await User.create(newUser);
    return user;
  };
}
