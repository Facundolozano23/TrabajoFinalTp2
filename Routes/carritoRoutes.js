import { Router } from "express";
import CarritoController from "../Controllers/carritoController.js";

const carritoController = new CarritoController();

const carritoRoutes = Router();

carritoRoutes.post("/", carritoController.createCarrito);
carritoRoutes.get("/", carritoController.readAllCarritos);
carritoRoutes.get("/:id", carritoController.readCarritoById)
carritoRoutes.put("/:id", carritoController.updateCarrito);
carritoRoutes.delete("/:id", carritoController.deleteCarrito)


export default carritoRoutes;