import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";

const postsModel = sequelize.define(
  "post",
  {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: "Post",
    paranoid: true, // Enable soft deletes
  }
);

export default postsModel;
