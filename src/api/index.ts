import appConfig from "config";
import got, { Response } from "got";
import { TItem, TItems } from "types";

const {
  DB_CLIENT: { url, headers },
} = appConfig;

export default {
  async insert(data: TItem | TItems): Promise<Response> {
    try {
      console.log(data, "👋🏾");
      return await got.post(url, {
        json: {
          operation: "insert",
          schema: "dev",
          table: "items",
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
