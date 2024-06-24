import { Router } from "express";
import ToyController from "../Controllers/toyController.js";

const toyController = new ToyController();

const toyRoutes = Router();

toyRoutes.post("/createtoy", toyController.createToy);
toyRoutes.get("/alltoys", toyController.readAllToys);
toyRoutes.get("/byid/:id", toyController.readToyById)
toyRoutes.put("/:id", toyController.updateToy);
toyRoutes.delete("/:id", toyController.deleteToy)


export default toyRoutes;