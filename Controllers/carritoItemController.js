import Carrito from "../Models/Carrito.js";
import CarritoItem from "../Models/CarritoItem.js";

class CarritoItemController {
 
  createCarritoItem = async (req, res) => {
    try {
      const {quantity, carritoId} = req.body;
      const data = await CarritoItem.create({ quantity,carritoId});
      res.status(201).send({
        success: true,
        message: `CarritoItem ${data.id} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }

  };

  readAllCarritoItems = async (req, res) => {
    try {
      const data = await CarritoItem.findAll({
        attributes: ["quantity"],
        include: {
          model: Carrito,
          attributes: ["id"],
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
  readCarritoItemsById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await CarritoItem.findOne({
        attributes: ["quantity"],
        where: { id },
        include: {
          model: Carrito,
          attributes: ["id"],
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
  deleteCarritoItem = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await CarritoItem.destroy({
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
  updateCarritoItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { quantity,carritoId} = req.body;
      const data = await CarritoItem.update(
        { quantity,userId},
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
  export default CarritoItemController;