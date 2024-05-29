import express from "express";
import routes from "./Routes/routes.js";
const app = express();

app.use(express.json());

app.use("/app", routes);

app.listen(8080, () => {
    console.log(`🚀 Servidor abierto con éxito`);
  });