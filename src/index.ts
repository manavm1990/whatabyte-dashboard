import config from "config";
import cors from "cors";
import express from "express";
// Sensible HTTP Headers defaults
import helmet from "helmet";
import { errorHandler, notFound } from "middleware";
import router from "./routes";

const app = express();

// App config
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/menu", router);

app.use(errorHandler);
app.use(notFound);

// Activate server
app.listen(config.PORT, async () => {
  console.info("Server 🏃🏾‍♂️", config.PORT);
  console.log(
    new Date(Date.now()).toLocaleTimeString("en-US", {
      timeZone: "America/Chicago",
    })
  );
});
