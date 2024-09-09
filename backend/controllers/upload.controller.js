import path from "path";
import fs from "fs";
import { User } from "../models/user.model.js";
const __dirname = path.resolve();

export const uploadProfilePic = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    user.profilePic = `${req.file.filename}`;
    await user.save();

    res.status(200).send("Profile picture uploaded successfully");
  } catch (error) {
    res.status(500).send("Error uploading profile picture", error);
  }
};

export const getProfilePic = async (req, res) => {
  const filePath = path.join(__dirname, "backend/uploads", req.params.filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath); // Trả file ảnh về cho client
  } else {
    res.status(404).send("File not found");
  }
};
