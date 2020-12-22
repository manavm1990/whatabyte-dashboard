import { config } from "dotenv";
import { TConfig } from "types";

if (!config()) {
  throw new Error("❗ No .env file 📁 found!");
}

const appConfig: TConfig = {
  PORT: process.env.PORT || 3001,
  DB_CLIENT: {
    url: process.env.INSTANCE_URL,
    headers: {
      Authorization: process.env.INSTANCE_AUTH_HEADER,
    },
  },
};

export default appConfig;
