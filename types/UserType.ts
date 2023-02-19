export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type UserProps = {
  user: User;
};

export type UsersProps = {
  users: User[];
};

export type UsersParams = {
  params: {
    id: string;
  };
};

export type UserPost = {
  id: number;
  name: string;
  tel: number;
};

export default User;
