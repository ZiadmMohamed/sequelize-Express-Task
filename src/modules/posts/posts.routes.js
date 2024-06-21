import { Router } from "express";
import {
  createPosts,
  deletingPost,
  readPost,
  updatePost,
} from "./posts.controller.js";

const router = Router();

router.post("/", createPosts);
router.get("/:id", readPost);
router.put("/", updatePost);
router.delete("/:id", deletingPost);

export default router;
