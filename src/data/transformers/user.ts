import { TransformedUser, User } from "../../types/types";

const transformUser = ({ id, email, first_name, last_name, avatar }: User) => ({
  id,
  email,
  firstName: first_name,
  lastName: last_name,
  avatar,
});

export const transformUsers = (users: User[]): TransformedUser[] =>
  users.map(transformUser);
