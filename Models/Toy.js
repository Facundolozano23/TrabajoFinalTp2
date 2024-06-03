import { DataTypes,Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class Toy extends Model {}

    Toy.init({

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:true
        },
        toyName:{
            type: DataTypes.STRING,
            allowNull:false,

        },

        brand:{
            type: DataTypes.STRING,
            allowNull:false,

        },

        price:{
            type: DataTypes.FLOAT,
            allowNull:false,
        },

        minAge:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        size:{

            type: DataTypes.FLOAT,
            allowNull:false,
        }

    },  {
        sequelize: connectionDatabase,
        modelName: "Toy",
        
      }

    );
export default Toy;