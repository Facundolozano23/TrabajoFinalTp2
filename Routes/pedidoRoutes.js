import { Router } from "express";
import PedidoController from "../Controllers/pedidoController.js";

const pedidoController = new PedidoController();

const pedidoRoutes = Router();

pedidoRoutes.post("/", pedidoController.createPedido);
pedidoRoutes.get("/", pedidoController.readAllPedido);
pedidoRoutes.get("/:id", pedidoController.readPedidoById)
pedidoRoutes.put("/:id", pedidoController.updatePedido);
pedidoRoutes.delete("/:id", pedidoController.deletePedido)


export default pedidoRoutes;