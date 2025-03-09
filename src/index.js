import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.set('strictQuery', false); // Suppress deprecation warning

mongoose.connect(
  "mongodb+srv://sampathreddy:12345@cluster0.jk1o9.mongodb.net/recipeshare?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    () => console.log("DB connected...")
  )

app.listen(3001, () => console.log("Server started"));
