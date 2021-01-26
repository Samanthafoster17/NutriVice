import { useState, useEffect } from "react";
import Recipe from "../Recipe";
import API from "../../utils/API";



function RecipeSearch() {
  
  const [recipe, setRecipe] = useState([])
  const term = "chicken";
  

  useEffect(() => {
   
    API.getRecipe(term)
    .then(response => setRecipe(response.data.hits))
  }, [])
 
  console.log(recipe)

  return (
    <div>
  {recipe.map(x => (
    <Recipe key={x.recipe.title} title={x.recipe.label} calories={x.recipe.calories} image={x.recipe.image} />
  ))}
    </div>
  )
}

  
  export default RecipeSearch;
  