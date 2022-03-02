import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  firstName?: StringNullableFilter;
  freedomPay?: BooleanFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
