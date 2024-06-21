import { Router } from "express";
import userRoutes from "./userRoutes.js";
import toyRoutes from "./toyRoutes.js";
import categoryRoutes from "./categoryRoutes.js"
import roleRoutes from "./roleRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/toy", toyRoutes);
routes.use("/category", categoryRoutes);
routes.use("/role", roleRoutes);
export default routes;