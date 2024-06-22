import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "bvyox59w8qykwxs5pggj",
  "u3gha6vunhrw0cyl",
  "U1PHMQZVXtZ6M4f7aKNR",
  {
    host: "bvyox59w8qykwxs5pggj-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);

export const connection = async () => {
  await sequelize
    .sync({ alter: true, force: false })
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => console.log("Unable to connect to the database:", err));
};
