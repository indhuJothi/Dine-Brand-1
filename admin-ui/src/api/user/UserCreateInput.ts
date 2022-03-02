import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address?: string | null;
  customers?: CustomerCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  freedomPay: boolean;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
