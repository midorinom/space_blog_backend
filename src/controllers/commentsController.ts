import { Request, Response } from "express";
import { Comments } from "../models/Comments";

const getCommentsById = async (req: Request, res: Response) => {
  try {
    const profileData = await Comments.find({
      article_id: req.body.article_id,
    });
    res.json(profileData);
  } catch (err) {
    console.log("POST /api/comments/get-by-id", err);
    res.status(400).json({
      status: "error",
      message: "an error has occurred when getting comments by Id.",
    });
  }
};

const createComment = async (req: Request, res: Response) => {
  try {
    await Comments.create(req.body);
    res.json({
      status: "okay",
      message: "Comment is created",
    });
  } catch (err) {
    console.log("PUT /api/comments/create", err);
    res.status(400).json({
      status: "error",
      message: "an error has occurred when creating a comment.",
    });
  }
};

export { getCommentsById, createComment };
