import express from "express";
import routes from "./Routes/routes.js";
import connectionDatabase from "./connection/connectionDataBase.js";
const app = express();

app.use(express.json());

app.use("/app", routes);

await connectionDatabase.sync({force:false})


app.listen(8080, () => {
    console.log(`🚀 Servidor abierto con éxito`);
  });