import { Router } from "express";
import CategoryController from "../Controllers/categoryController.js"

const categoryController= new CategoryController();
const categoryRoutes= Router();

categoryRoutes.post("/", categoryController.createCategory);
categoryRoutes.get("/", categoryController.readAllCategories);

export default categoryRoutes;
