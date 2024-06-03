import { Router } from "express";
import userRoutes from "./userRoutes.js";
import toyRoutes from "./toyRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/toy", toyRoutes);

export default routes;