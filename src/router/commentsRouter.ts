import express from "express";
import { getComments } from "../controllers/commentsController";

const router = express.Router();

// Endpoints
router.post("/get", getComments);

// Export
export { router };
