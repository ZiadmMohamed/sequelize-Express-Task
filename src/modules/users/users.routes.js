import { Router } from "express";
import { Registration, logIn, logOut } from "./users.controller.js";

const router = Router();

router.post("/", Registration);
router.get("/", logIn);
router.delete("/:id", logOut);

export default router;
