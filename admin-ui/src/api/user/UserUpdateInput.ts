import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  address?: string | null;
  customers?: CustomerUpdateManyWithoutUsersInput;
  firstName?: string | null;
  freedomPay?: boolean;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
