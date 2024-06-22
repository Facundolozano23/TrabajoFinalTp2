import { Router } from "express";
import userRoutes from "./userRoutes.js";
import toyRoutes from "./toyRoutes.js";
import categoryRoutes from "./categoryRoutes.js"
import roleRoutes from "./roleRoutes.js";
import carritoRoutes from "./carritoRoutes.js"
import carritoItemRoutes from "./carritoItemRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
const routes = Router();

routes.use("/user", userRoutes);
routes.use("/toy", toyRoutes);
routes.use("/category", categoryRoutes);
routes.use("/role", roleRoutes);
routes.use("/carrito",carritoRoutes);
routes.use("/carritoItem",carritoItemRoutes);
routes.use("/pedido", pedidoRoutes);

export default routes;