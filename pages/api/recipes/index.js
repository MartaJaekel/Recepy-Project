import dbConnect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();

  //GET method
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    console.log("places: ", recipes);
    return response.status(200).json(recipes);
  }
  if(request.method === "POST") {
    try{
      const recipeData = request.body;
      await Recipe.create(recipeData);
      response.status(201).json({status: "recipe created"});

    }
    catch (error) {
      console.log(error);
      response.status(400).json({error: error.message})
    }
  }
}
