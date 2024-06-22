import { DataTypes,Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class CarritoItem extends Model {}

    CarritoItem.init({

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:true
        },
        quantity:{
            type: DataTypes.INTEGER,
          allowNull:false,
          defaultValue: 0.0
        },

        
    },  {
        sequelize: connectionDatabase,
        modelName: "CarritoItem",
        timestamps: false
      }

    );
export default CarritoItem;