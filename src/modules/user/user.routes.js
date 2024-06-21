import { Router } from "express";
import { userDetails } from "./user.conroller.js";
const router = Router();

router.get("/:id", userDetails);

export default router;
