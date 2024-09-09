import express from "express";
import { upload } from "../config/upload.js";
import {
  getProfilePic,
  uploadProfilePic,
} from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/:userId", upload.single("file"), uploadProfilePic);
router.get("/:filename", getProfilePic);

export default router;
