import { DataTypes, Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
    
  }
);

export default User;