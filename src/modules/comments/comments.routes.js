import { Router } from "express";
import {
  createcomments,
  deletingcomments,
  readcomments,
  updatecomments,
} from "./comments.controller.js";

const router = Router();

router.post("/", createcomments);
router.get("/:id", readcomments);
router.put("/", updatecomments);
router.delete("/:id", deletingcomments);

export default router;
