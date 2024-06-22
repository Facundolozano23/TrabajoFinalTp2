import Pedido from "../Models/Pedido.js";
import Carrito from "../Models/Carrito.js";

class PedidoController {
 
  createPedido = async (req, res) => {
    try {
      const {subTotalAmount,totalAmount, carritoId} = req.body;
      const data = await Pedido.create({ subTotalAmount,totalAmount,carritoId});
      res.status(201).send({
        success: true,
        message: `Pedido ${data.id} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }

  };

  readAllPedido = async (req, res) => {
    try {
      const data = await Pedido.findAll({
        attributes: ["subTotalAmount","totalAmount"],
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
  readPedidoById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Pedido.findOne({
        attributes: ["subTotalAmount","totalAmount"],
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
  deletePedido = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Pedido.destroy({
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
  updatePedido = async (req, res) => {
    try {
      const { id } = req.params;
      const { subTotalAmount,totalAmount,carritoId} = req.body;
      const data = await Pedido.update(
        {subTotalAmount,totalAmount,carritoId },
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
  export default PedidoController;