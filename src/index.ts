import config from "config";
import cors from "cors";
import express from "express";
// Sensible HTTP Headers defaults
import helmet from "helmet";

const app = express();

// App config
app.use(helmet());
app.use(cors());
app.use(express.json());

// Activate server
app.listen(config.PORT, () => {
  console.log("Server 🏃🏾‍♂️", config.PORT);
});
