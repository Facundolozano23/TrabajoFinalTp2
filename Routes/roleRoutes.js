import { Router } from "express";
import RoleController from "../Controllers/roleController.js"

const roleController= new RoleController();
const roleRoutes= Router();

roleRoutes.post("/", roleController.createRole);
roleRoutes.get("/", roleController.readAllRoles);
roleRoutes.put("/", roleController.updateROle);

export default roleRoutes;
