import { DataTypes,Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class Category extends Model {}

    Category.init({

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:true
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [5, 20],
                is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
              },

        },


    },  {
        sequelize: connectionDatabase,
        modelName: "Category",
        timestamps: false
      }

    );
export default Category;