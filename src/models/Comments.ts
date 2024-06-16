// Require
import mongoose from "mongoose";

// Schema
const CommentsSchema = new mongoose.Schema(
  {
    x: Number,
  },
  { collection: "comments" }
);

// Export
const Comments = mongoose.model("Comments", CommentsSchema);
export { Comments };
