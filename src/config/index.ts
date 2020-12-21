import { config } from "dotenv";
import { TConfig } from "types";

if (!config()) {
  throw new Error("❗ No .env file 📁 found!");
}

const appConfig: TConfig = {
  PORT: Number(process.env.PORT) || 3001,
};

export default appConfig;
