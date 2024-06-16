import { Request, Response } from "express";
import { Comments } from "../models/Comments";

const getCommentsById = async (req: Request, res: Response) => {
  try {
    const comments = await Comments.find({
      article_id: req.body.article_id,
    }).select("-_id -__v");
    res.json(comments);
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

const getAverageCommentsPerDay = async (req: Request, res: Response) => {
  try {
    const averageComments = await Comments.aggregate([
      {
        $group: {
          _id: "$date",
          totalComments: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: null,
          averageCommentsPerDay: { $avg: "$totalComments" },
        },
      },
      {
        $project: {
          _id: 0,
          averageCommentsPerDay: { $floor: "$averageCommentsPerDay" },
        },
      },
    ]);

    res.json({
      averageComments: averageComments,
    });
  } catch (err) {
    console.log("GET /api/comments/get-average", err);
    res.status(400).json({
      status: "error",
      message: "an error has occurred when getting average comments per day.",
    });
  }
};

export { getCommentsById, createComment, getAverageCommentsPerDay };
