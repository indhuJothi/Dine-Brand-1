import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  username?: StringNullableFilter;
};
