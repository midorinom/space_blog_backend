import express from "express";
import {
  getCommentsById,
  createComment,
} from "../controllers/commentsController";

const router = express.Router();

// Endpoints
router.post("/get-by-id", getCommentsById);
router.put("/create", createComment);

// Export
export { router };
