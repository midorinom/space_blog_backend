import mongoose from "mongoose";

const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export { connectDB };
