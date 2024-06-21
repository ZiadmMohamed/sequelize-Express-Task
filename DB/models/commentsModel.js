// content, postId (linked to the post model), and userId(linked to the User model)

import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";

const commentsModel = sequelize.define("comment", {
  content: {
    type: DataTypes.STRING,
  },
});

export default commentsModel;
