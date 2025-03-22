import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://1ms22ad045:6WDoJg00AJbtNRqV@adityaprivateltd.ax8wh.mongodb.net/"

  try {
    await mongoose.connect(connectionUrl);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

export default connectToDB;
