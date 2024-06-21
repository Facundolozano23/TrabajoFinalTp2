import { Router } from "express";
import ToyController from "../Controllers/toyController.js";

const toyController = new ToyController();

const toyRoutes = Router();

toyRoutes.post("/", toyController.createToy);
toyRoutes.get("/", toyController.readAllToys);
toyRoutes.get("/:id", toyController.readToyById)
toyRoutes.put("/:id", toyController.updateToy);
toyRoutes.delete("/:id", toyController.deleteToy)


export default toyRoutes;