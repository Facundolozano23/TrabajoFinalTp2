import { DataTypes, Model } from "sequelize";
import connectionDatabase from "../connection/connectionDataBase.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connectionDatabase,
    modelName: "Role",
    timestamps: false
  }
);

export default Role;