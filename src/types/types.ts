export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TransformedUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

export type SortOption = {
  value: string;
  title: string;
};
