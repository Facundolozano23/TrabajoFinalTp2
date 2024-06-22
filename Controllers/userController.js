import  { User, Role,Carrito } from "../Models/relations.js";
import { generateToken, verifyToken } from "../utils/token.js";


class UserController {
  

  createUser = async (req, res) => {
    try {
      const { userName, email, password,roleId,carritoId} = req.body;
      const data = await User.create({ userName, email, password,roleId,carritoId });
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
        include: {
          model: Role,
          attributes: ["roleName"],
          model: Carrito,
          attributes: ["id","processed","cancelled"],
          
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

  readUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findOne({
        attributes: ["userName", "email", "active"],
        where: { id },
        include: {
          model: Role,
          attributes: ["roleName"],
          model: Carrito,
          attributes: ["id"],
          model: Carrito,
          attributes: ["id","processed","cancelled"],
          
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
      const { userName, email, active,roleId,carritoId } = req.body;
      const data = await User.update(
        { userName, email, active,roleId,carritoId },
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

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await User.findOne({ where: { email } });
      if (!data) throw new Error("El usuario con ese email no existe, intente nuevamente");
      const validatePassword = await data.validatePassword(password);
      if (!validatePassword) throw new Error("La contraseña es inválida, intente nuevamente");
      const payload = {
        id: data.id,
        name: data.userName,
      }; const token = generateToken(payload);
      res.cookie("token", token); 
      res.status(200).send({
        success: true,
        message: "Usuario logueado con éxito",
      }); }
       catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }
}
me = async (req, res) => {
  try {
   
    const { user } = req;
    console.log(`🚀 ~ UserController ~ me= ~ user:`, user)
    res.status(200).send({
      success: true,
      message: user,
    });
  } catch (error) {
    res.status(400).send({ succces: false, message: error.message });
  }
};

};
  export default UserController;