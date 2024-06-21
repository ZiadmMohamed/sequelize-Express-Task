import express from "express";
import { connection, sequelize } from "./DB/connectionDB.js";
import usersRouter from "./src/modules/users/users.routes.js";
import postsRouter from "./src/modules/posts/posts.routes.js";
import commentsRouter from "./src/modules/comments/comments.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import {
  userModel,
  postsModel,
  commentsModel,
} from "./DB/models/associations/relations.js";

const app = express();
const port = 3000;

connection();
app.use(express.json());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.use("/user", userRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.get("*", (req, res) => res.send("404 Not Found"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
