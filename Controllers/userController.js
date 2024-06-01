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
  };}

  export default UserController;