import express from "express";
import { createRecipe, deleteRecipe, getAllRecipe, getRecipeById, updateRecipe } from "../Controller/RecipeController.js";


const router=express.Router();

router.post("/create",createRecipe);
router.get("/getdata",getAllRecipe);
router.get("/getdata/:id",getRecipeById);
router.put("/update/:id",updateRecipe);
router.delete("/delete/:id",deleteRecipe);

export default router;
