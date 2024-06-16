import express from "express";
import {
  getCommentsById,
  createComment,
  getAverageCommentsPerDay,
  getTopCommenters,
} from "../controllers/commentsController";

const router = express.Router();

// Endpoints
router.post("/get-by-id", getCommentsById);
router.put("/create", createComment);
router.get("/get-top", getTopCommenters);
router.get("/get-average", getAverageCommentsPerDay);

// Export
export { router };
