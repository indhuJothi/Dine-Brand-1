import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  password?: string | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
