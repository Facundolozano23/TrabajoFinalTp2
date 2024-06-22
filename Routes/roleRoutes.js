import { Router } from "express";
import RoleController from "../Controllers/roleController.js"

const roleController= new RoleController();
const roleRoutes= Router();

roleRoutes.post("/", roleController.createRole);
roleRoutes.get("/", roleController.readAllRoles);
roleRoutes.get("/:id", roleController.readRoleById)
roleRoutes.put("/:id", roleController.updateROle);
roleRoutes.delete("/:id", roleController.deleteRole)


export default roleRoutes;
