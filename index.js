import express from "express";
import routes from "./Routes/routes.js";
import connectionDatabase from "./connection/connectionDataBase.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/app", routes);

await connectionDatabase.sync({force:false})


app.listen(8080, () => {
    console.log(`🚀 Servidor abierto con éxito`);
  });