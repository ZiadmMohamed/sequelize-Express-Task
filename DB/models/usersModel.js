import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";

const userModel = sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default userModel;
