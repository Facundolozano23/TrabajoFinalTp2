import User from "../Models/User.js";
import Carrito from "../Models/Carrito.js";
import CarritoItem from "../Models/CarritoItem.js";


class CarritoController {
 
  createCarrito = async (req, res) => {
    try {
      const {processed,cancelled, userId,carritoId} = req.body;
      const data = await Carrito.create({ processed,cancelled,userId,carritoId});
      res.status(201).send({
        success: true,
        message: `Carrito ${data.id} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }

  };

  readAllCarritos = async (req, res) => {
    try {
      const data = await Carrito.findAll({
        attributes: ["processed","cancelled"],
        include: {
          model: User,
          attributes: ["userName"],
          model: CarritoItem,
          attributes:["id","quantity"],  
          
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
  readCarritoById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Carrito.findOne({
        attributes: ["processed","cancelled"],
        where: { id },
        include: {
          model: User,
          attributes: ["userName"],
          model: CarritoItem,
          attributes:["id","quantity"],  
        
          
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
  deleteCarrito = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Carrito.destroy({
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
  updateCarrito = async (req, res) => {
    try {
      const { id } = req.params;
      const { processed,cancelled,userId,toyId} = req.body;
      const data = await Carrito.update(
        { processed,cancelled,userId},
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
  export default CarritoController;