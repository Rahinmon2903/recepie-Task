import recipe from "../Model/RecipeSchema.js";

//create recipe

export const createRecipe=async (req,res) => {
    try {
        //new recipe(req.body); we are getting values from recipe and assign it to newRecipe
        const newRecipe=new recipe(req.body);
        await newRecipe.save();
        res.status(200).json({message:"recipe created successfully",data: newRecipe})
        
    } catch (error) {
        res.status(503).json({message:"error in creating a recipe"})
        
    }
    
}