import { DataTypes,Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class Carrito extends Model {}

    Carrito.init({

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:true
        },
        processed:{
            type: DataTypes.BOOLEAN,
          allowNull:true,
          defaultValue: false
        },
       cancelled:{
            type: DataTypes.BOOLEAN,
          allowNull:true,
          defaultValue: false
        },

        
    },  {
        sequelize: connectionDatabase,
        modelName: "Carrito",
        timestamps: false
      }

    );
export default Carrito;