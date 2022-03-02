import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  password?: string | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
