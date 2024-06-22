import { Router } from "express";
import CarritoItemController from "../Controllers/carritoItemController.js";

const carritoItemController = new CarritoItemController();

const carritoItemRoutes = Router();

carritoItemRoutes.post("/", carritoItemController.createCarritoItem);
carritoItemRoutes.get("/", carritoItemController.readAllCarritoItems);
carritoItemRoutes.get("/:id", carritoItemController.readCarritoItemsById)
carritoItemRoutes.put("/:id", carritoItemController.updateCarritoItem);
carritoItemRoutes.delete("/:id", carritoItemController.deleteCarritoItem)


export default carritoItemRoutes;