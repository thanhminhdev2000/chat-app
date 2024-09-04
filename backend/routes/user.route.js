import express from "express";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getUsersForSidebar);

export default router;
