import appConfig from "config";
import got, { OptionsOfJSONResponseBody, Response } from "got";
import { TItems, TUpdateItem } from "types";

const {
  DB_CLIENT: { url, headers },
} = appConfig;

const headersResponseType: OptionsOfJSONResponseBody = {
  headers,
  responseType: "json",
};
const schemaTable = { schema: "dev", table: "menu" };

export default {
  async index(): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          ...schemaTable,
          operation: "sql",
          sql: "SELECT * FROM dev.menu",
        },
        ...headersResponseType,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async find(hashVals: number[]): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          ...schemaTable,
          operation: "search_by_hash",
          hash_values: hashVals,
          get_attributes: ["name", "price", "description", "imageUrl"],
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async create(data: TItems): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          ...schemaTable,
          operation: "insert",
          records: data,
        },
        ...headersResponseType,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async update(data: TUpdateItem): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          ...schemaTable,
          operation: "update",
          records: data,
        },
        ...headersResponseType,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async delete(hashVals: number[]): Promise<Response> {
    try {
      return await got.post(url, {
        json: {
          ...schemaTable,
          operation: "delete",
          hash_values: hashVals,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
