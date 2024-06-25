import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();

// Load environment variables from .env file
dotenv.config({
  path: `./env`,
});

// Connect to MongoDB using Mongoose
connectDB()
  .then(() => {
    // Handle errors during server operation
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    // Start the Express server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!", err);
  });

/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();*/
