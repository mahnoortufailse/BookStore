import express from "express";
const app = express();
import connectMongoDB from "./connection.js";
import dotenv from "dotenv";
import cors from "cors"
import bookRoute from "./route/book_route.js";
import userRoute from "./route/user_route.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const URL = process.env.mongoDBURL;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
connectMongoDB(URL).then((res, err) => {
  console.log("Connect Successfully");
});

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
