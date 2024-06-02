import User from "../Models/User.js";

class UserController {
  // createUser(){}
  createUser = async (req, res) => {
    try {
      const { userName, email, password } = req.body;
      const data = await User.create({ userName, email, password });
      res.status(201).send({
        success: true,
        message: `Usuario ${data.userName} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readAllUser = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["userName", "email", "active"],
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findAll({
        attributes: ["userName", "email", "active"],
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
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.destroy({
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
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, email, isActive } = req.body;
      const data = await User.update(
        { name, mail, isActive },
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
  export default UserController;