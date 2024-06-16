// Require
import mongoose from "mongoose";

// Schema
const CommentsSchema = new mongoose.Schema(
  {
    article_id: Number,
    username: String,
    comment: String,
    date: String,
  },
  { collection: "comments" }
);

// Export
const Comments = mongoose.model("Comments", CommentsSchema);
export { Comments };
