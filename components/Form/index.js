export default function Form(onSubmit) {
    
  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text"></input>
        <label htmlFor="servings">Servings</label>
        <input id="servings" name="servings" type="number"></input>
        <label htmlFor="time">Time</label>
        <input id="time" name="time" type="number"></input>
        <label htmlFor="image-url">Image-Url</label>
        <input id="image-url" name="image-url" type="text"></input>
        <label htmlFor="ingredients">Ingredients</label>
        <input id="ingredients" name="ingredients" type="text"></input>
        <label htmlFor="directions">Directions</label>
        <input id="directions" name="directions" type="text"></input>
      </form>
      <button type="submit">Submit Form</button>
    </>
  );
}
