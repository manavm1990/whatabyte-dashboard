import appConfig from "config";
import got, { Response } from "got";
import { TItem, TItems } from "types";

const {
  DB_CLIENT: { url, headers },
} = appConfig;

export default {
  async index(): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          operation: "sql",
          sql: "SELECT * FROM dev.menu",
        },
        headers,
        responseType: "json",
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async insert(data: TItem | TItems): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          operation: "insert",
          schema: "dev",
          table: "menu",
          records: data,
        },
        headers,
        responseType: "json",
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
