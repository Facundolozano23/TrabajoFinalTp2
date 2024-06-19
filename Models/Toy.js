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
            validate: {
                len: [5, 20],
                is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
              },

        },

        brand:{
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [5, 20],
                is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
              },

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
        },

        yearCreation:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },

    },  {
        sequelize: connectionDatabase,
        modelName: "Toy",
        timestamps: false
      }

    );
export default Toy;