import { Router } from "express";
import ToyController from "../Controllers/toyController.js";

const toyController = new ToyController();

const toyRoutes = Router();

toyRoutes.post("/", toyController.createToy);
toyRoutes.get("/", toyController.readAllToys);


export default toyRoutes;