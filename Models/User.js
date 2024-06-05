import { DataTypes, Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
     
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: connectionDatabase,
    modelName: "User",
    timestamps: false
  }
);

export default User;