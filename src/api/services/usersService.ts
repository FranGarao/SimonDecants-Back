import { initializeUser } from "../db/models/User";
import { sequelizeInstance } from "../db/dbInstance";
const User = initializeUser(sequelizeInstance);

export class userService {
  getUsers = async () => {
    const users = await User.findAll({ raw: true });
    return users;
  };
}
