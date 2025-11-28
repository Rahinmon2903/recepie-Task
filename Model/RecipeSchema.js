import mongoose from "mongoose";


const recipeSchema=mongoose.Schema({
    recipeName:{
        type: String,
        required: true,
    },
     Ingredients:{
        type: String,
        required: true,
    },
     procedure:{
        type: String,
        required: true,
    },
});

//collection name recipe and the values or structure is recipeSchema

const recipe=mongoose.model("recipe",recipeSchema);

export default recipe;