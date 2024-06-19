import { Router } from "express";
import userRoutes from "./userRoutes.js";
import toyRoutes from "./toyRoutes.js";
import categoryRoutes from "./categoryRoutes.js"

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/toy", toyRoutes);
routes.use("/category", categoryRoutes)

export default routes;