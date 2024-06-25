import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

// JSON and URL-encoded body parsing with size limit
app.use(express.json({ limit: "16kb" })); // Parse JSON bodies up to 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded bodies up to 16kb

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

// Export the configured Express application
export { app };
