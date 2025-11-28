import express from "express";
import { createRecipe, getAllRecipe, getRecipeById } from "../Controller/RecipeController.js";


const router=express.Router();

router.post("/create",createRecipe);
router.get("/getdata",getAllRecipe);
router.get("/getdata/:id",getRecipeById);

export default router;
