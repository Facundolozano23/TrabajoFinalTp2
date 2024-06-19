import Category from "../Models/Category.js";

class CategoryController{
createCategory = async (req,res) =>{
    try {
        const {description} = req.body;
        const data = await Category.create({ description});
        res.status(201).send({
          success: true,
          message: `Categoría ${data.description} creada con exito`,
        });
      } catch (error) {
        res.status(400).send({ succces: false, message: error.message });
      }

};

readAllCategories = async (req, res) => {
    try {
      const data = await Category.findAll({
        attributes: ["description"],
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }



    readCategoryById = async (req, res) => {
      try {
        const { id } = req.params;
        const data = await Toy.findAll({
          attributes: ["description"],
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
deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.destroy({
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
  updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { description} = req.body;
      const data = await Category.update(
        { description },
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

};}

export default CategoryController; 