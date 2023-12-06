import dbConnect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const recipes = await Recipe.findById(id);
      response.status(200).json(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
