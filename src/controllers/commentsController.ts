import { Request, Response } from "express";
import { Comments } from "../models/Comments";

const getComments = async (req: Request, res: Response) => {
  try {
    const profileData = await Comments.find({ x: req.body.x }).select("_id");
    res.json(profileData);
  } catch (err) {
    console.log("POST /api/comments/get", err);
    res.status(400).json({
      status: "error",
      message: "an error has occurred when getting comments",
    });
  }
};
export { getComments };
