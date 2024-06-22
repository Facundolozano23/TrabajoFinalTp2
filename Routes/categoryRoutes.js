import {Router } from "express";
import CategoryController from "../Controllers/categoryController.js";

const categoryController= new CategoryController();
const categoryRoutes= Router();

categoryRoutes.post("/", categoryController.createCategory)
categoryRoutes.get("/", categoryController.readAllCategories)
categoryRoutes.get("/:id", categoryController.readAllCategories)
categoryRoutes.put("/:id", categoryController.updateCategory)
categoryRoutes.delete("/:id", categoryController.deleteCategory)

export default categoryRoutes;