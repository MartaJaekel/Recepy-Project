import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  servings: { type: Number, required: true },
  time: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: Array, required: true },
  directions: { type: Array, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
