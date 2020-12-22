export type TConfig = {
  PORT: string | number;
  DB_CLIENT: {
    url: URL;
    headers: {
      Authorization: string | undefined;
    };
  };
  AUTH: {
    issuer: string | undefined;
    audience: string | undefined;
  };
};

export type TItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};
export type TUpdateItems = [
  {
    id: number;
    name?: string;
    price?: number;
    description?: string;
    imageUrl?: string;
  }
];

export type TItems = TItem[];
