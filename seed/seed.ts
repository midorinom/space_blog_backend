import dotenv from "dotenv";
import { connectDB } from "../src/db/db.js";
import { Comments } from "../src/models/Comments.js";
import { seedData } from "./seed-data.js";

dotenv.config();

if (!process.env.MONGODB_URI) {
  console.log("MONGODB_URI is not defined.");
} else {
  connectDB(process.env.MONGODB_URI);
}

const seedDatabase = async () => {
  try {
    console.log("Seeding the database, please wait...");

    await Promise.all(
      seedData.map(async (commentData) => {
        const existingData = await Comments.findOne({
          $and: [
            { article_id: commentData.article_id },
            { username: commentData.username },
            { comment: commentData.comment },
            { date: commentData.date },
          ],
        });

        if (!existingData) {
          // Insert the document if it doesn't exist
          await Comments.create(commentData);
        } else {
          console.log(
            `Skipping duplicate entry by ${commentData.username} on the article: ${commentData.article_id}.`
          );
        }
      })
    );

    console.log("Done seeding the database.");
  } catch (err) {
    console.error("An error occurred when seeding the database:", err);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
