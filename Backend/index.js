import express from "express";
import http from "http";
import connectMongoDB from "./connection.js";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book_route.js";
import userRoute from "./route/user_route.js";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./controller/errorController.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.MongoDBURL;

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectMongoDB(URL)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB");
    console.error(err);
  });

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Handle all other routes
app.all("*", (req, res, next) => {
  next(new AppError(`Page not found ${req.originalUrl}`, 404));
});

// Global error handler
app.use(globalErrorHandler);

// Create HTTP server and listen on the port
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection at:",  err.message);
  server.close(() => {
    console.log("Server closed due to unhandled rejection");
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception at:", err.message);
  server.close(() => {
    console.log("Server closed due to uncaught exception");
    process.exit(1);
  });
});


