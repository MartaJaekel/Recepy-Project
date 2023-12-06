import dbConnect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  //GET method

  if (request.method === "GET") {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return response.status(404).json({ status: "Not found!" });
    }

    response.status(200).json(recipe);
  }
}
