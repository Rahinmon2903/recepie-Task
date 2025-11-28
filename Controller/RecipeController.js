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

//get all recipe
export const getAllRecipe=async (req,res) => {
    try {
        //just displaying all recipe using find();
        const Recipe=await recipe.find();
       
        res.status(200).json({message:"data retireved successfully",data: Recipe})
        
    } catch (error) {
        res.status(503).json({message:"error in getting all recipe"})
        
    }
    
}
//get  recipe by id
export const getRecipeById=async (req,res) => {
    try {
        //getting id from params and find it using findById
       const recipeId=req.params.id;
       const result=await recipe.findById(recipeId);
       if(!result){
        return res.status(404).json({message:"No recipe Found"})

       }
       return res.status(200).json({message:" recipe Found",data:result})

        
    } catch (error) {
        res.status(503).json({message:"error in getting recipe by id"})
        
    }
    
}

//get  updateRecipe by id
export const updateRecipe=async (req,res) => {
    try {
       const recipeId=req.params.id;
       const {recipeName,Ingredients,procedure}=req.body;
       const result=await recipe.findByIdAndUpdate(
        {_id:recipeId},
        {recipeName,Ingredients,procedure},
        {new:true}

       );
       if(result.matchedCount == 0){
        return res.status(404).json({message:"No recipe Found"})

       }
       return res.status(200).json({message:" recipe updated successfully",data:result})

        
    } catch (error) {
        res.status(503).json({message:"error in updating recipe"})
        
    }
    
}
