📘 README – Recipe API
🍽️ Overview

This project is a simple Recipe Management REST API built with Node.js, Express, and MongoDB.
It allows users to create, read, update, and delete cooking recipes.

🚀 Features

Create new recipes

Get all recipes

Get a recipe by ID

Update a recipe

Delete a recipe

Clean and simple REST endpoints

🔗 API Documentation

👉 View Full Documentation:
[API LINK](https://documenter.getpostman.com/view/44991925/2sB3dLUC2B)



📦 Tech Stack

Node.js

Express.js

MongoDB & Mongoose

Postman for testing

📁 API Endpoints
1️⃣ Create Recipe

POST /api/recipe/create
Creates a new recipe.

2️⃣ Get All Recipes

GET /api/recipe/getdata
Returns the full list of recipes.

3️⃣ Get Recipe by ID

GET /api/recipe/getdata/:id
Fetches a single recipe by its MongoDB _id.

4️⃣ Update Recipe

PUT /api/recipe/update/:id
Updates an existing recipe by ID.

5️⃣ Delete Recipe

DELETE /api/recipe/delete/:id
Removes a recipe from the database.



▶️ Running the Project
npm install
npm run dev


Make sure MongoDB connection string is set in .env.