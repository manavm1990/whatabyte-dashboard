import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
// Sensible HTTP Headers defaults
import helmet from "helmet";

dotenv.config();

const app = express();

const PORT: number = Number(process.env.PORT) || 3000;

// App config
app.use(helmet());
app.use(cors());
app.use(express.json());

// Activate server
app.listen(PORT, () => {
  console.log("Server 🏃🏾‍♂️", PORT);
});
