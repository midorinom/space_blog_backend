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

const getTopCommenters = async (req: Request, res: Response) => {
  try {
    const topCommenters = await Comments.aggregate([
      {
        $group: {
          _id: "$username",
          totalComments: { $sum: 1 },
        },
      },
      {
        $sort: { totalComments: -1 },
      },
      {
        $limit: 3,
      },
      {
        $project: {
          _id: 0,
          username: "$_id",
          totalComments: 1,
        },
      },
    ]);

    res.json({
      topCommenters: topCommenters,
    });
  } catch (err) {
    console.log("GET /api/comments/get-top", err);
    res.status(400).json({
      status: "error",
      message: "an error has occurred when getting top commenters per day.",
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
      averageCommentsPerDay: averageComments[0].averageCommentsPerDay,
    });
  } catch (err) {
    console.log("GET /api/comments/get-average", err);
    res.status(400).json({
      status: "error",
      message: "an error has occurred when getting average comments per day.",
    });
  }
};

export {
  getCommentsById,
  createComment,
  getTopCommenters,
  getAverageCommentsPerDay,
};
