import  {Role,User } from "../Models/relations.js";

class RoleController {
  createRole = async (req, res) => {
    try {
      const { } = req.body;
      const data = await Role.create({roleName});
      res.status(201).send({
        success: true,
        message: `Rol ${data.roleName} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readAllRoles = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["roleName"],
        include: {
          model: User,
          attributes: ["userName"],
          
        },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Role.findOne({
        attributes: ["roleName"],
        where: { id },
        include: {
          model: User,
          attributes: ["userName"],
        },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Role.destroy({
        where: { id },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  updateROle = async (req, res) => {
    try {
      const { id } = req.params;
      const { roleName } = req.body;
      const data = await Role.update(
        { roleName },
        { where: { id } }
      );
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

}
  export default RoleController;