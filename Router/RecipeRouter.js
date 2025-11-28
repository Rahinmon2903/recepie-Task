import express from "express";
import { createRecipe } from "../Controller/RecipeController.js";


const router=express.Router();

router.post("/create",createRecipe);

export default router;
