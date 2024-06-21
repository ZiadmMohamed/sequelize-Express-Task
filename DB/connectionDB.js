import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("assignment-6", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const connection = async () => {
  await sequelize
    .sync({ alter: true, force: false })
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => console.log("Unable to connect to the database:", err));
};
