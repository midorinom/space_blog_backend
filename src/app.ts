import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/middleware";
import api from "./api/api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api", api);

app.use(notFound);
app.use(errorHandler);

export default app;
