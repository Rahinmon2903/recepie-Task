import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js"
import router from "./Router/RecipeRouter.js"

//Dotenv configuration

dotenv.config();

//Express initialization

const app = express();

//calling the db function
connectDB();

//default middleware

app.use(express.json());

app.use(cors());

//Default Route

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

//Port

const port = process.env.PORT || 5000;

//custome route
app.use("/api/recipe",router);

//server starting logic

app.listen(port, () => {
  console.log("server started");
});