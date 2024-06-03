import Toy from "../Models/Toy.js";

class ToyController {
  // createUser(){}
  createToy = async (req, res) => {
    try {
      const {toyName, brand, price,minAge,size } = req.body;
      const data = await Toy.create({ toyName, brand, price,minAge,size});
      res.status(201).send({
        success: true,
        message: `Juguete ${data.toyName} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readAllToys = async (req, res) => {
    try {
      const data = await Toy.findAll({
        attributes: ["toyName", "brand", "price","minAge","size"],
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

 
}
  export default ToyController;