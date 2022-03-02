import { Customer } from "../customer/Customer";

export type User = {
  address: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  firstName: string | null;
  freedomPay: boolean;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
