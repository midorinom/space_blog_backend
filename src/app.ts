import express, { Express } from "express";
import { connectDB } from "./db/db";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/middleware";
import { router as commentsRoutes } from "./router/commentsRouter";

// Config
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
if (!process.env.MONGODB_URI) {
  console.log("MONGODB_URI is not defined.");
} else {
  connectDB(process.env.MONGODB_URI);
}

// Routes
app.use("/api/comments", commentsRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;
