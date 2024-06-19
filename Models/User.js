import { DataTypes, Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
     
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 10],
      },
    
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