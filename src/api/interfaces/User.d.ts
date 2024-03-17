import { Location } from "./Location";
export interface User {
  name: string;
  last_name: string;
  location: Location;
  email: string;
  normal_email: string;
  password: string;
  phone: string;
}
