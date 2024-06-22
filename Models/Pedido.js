import { DataTypes,Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class Pedido extends Model {}

    Pedido.init({

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:true
        },
        subTotalAmount:{
            type: DataTypes.FLOAT,
          allowNull:false,
          defaultValue: 0.0
        },
       totalAmount:{
            type: DataTypes.FLOAT,
          allowNull:false,
          defaultValue: 0.0

        },

        
    },  {
        sequelize: connectionDatabase,
        modelName: "Pedido",
        timestamps: false
      }

    );
export default Pedido;