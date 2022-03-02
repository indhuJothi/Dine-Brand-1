import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  id: string;
  password: string | null;
  updatedAt: Date;
  user?: User | null;
  username: string | null;
};
