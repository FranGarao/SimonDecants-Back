import { Location } from "./Location";
export interface User {
  id?: number;
  name: string;
  last_name: string;
  email: string;
  normal_email: string;
  password: string;
  phone: string;
  type: string;
  location: Location;
}
