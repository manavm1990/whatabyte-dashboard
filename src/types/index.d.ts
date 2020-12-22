export type TConfig = {
  PORT: string | number;
  DB_CLIENT: {
    url: URL;
    headers: {
      Authorization: string | undefined;
    };
  };
};

export type TItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};
export type TUpdateItem = {
  id: number;
  name?: string;
  price?: number;
  description?: string;
  imageUrl?: string;
};

export type TItems = TItem[];
