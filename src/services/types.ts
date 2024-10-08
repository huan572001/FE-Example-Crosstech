export interface IRank {
  rank: number;
  point: string;
  friends: number;
  address: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserST {
  id: number;
  address: string;
  token: string;
  twitterUsername: string;
  telegramId: string;
  twitterId: string;
  discordId: string;
}

export enum STATUS_CARD {
  DISABLE = "DISABLE",
  FOLLOW = "FOLLOW",
  VERIFY = "VERIFY",
}
