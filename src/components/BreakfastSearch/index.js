


import { useState, useEffect } from "react";
import Breakfast from "../Breakfast";
import API from "../../utils/API";



function BreakfastSearch() {
  
  const [recipe, setRecipe] = useState([])
  const term = "breakfast, diet=balanced";
  

  useEffect(() => {
   
    API.getRecipe(term)
    .then(response => setRecipe(response.data.hits))
  }, [])
 
  console.log(recipe)


  
  return (
    <div>
  {recipe.slice(0, 1).map(x => (
    <Breakfast key={x.recipe.title} title={x.recipe.label} url={x.recipe.url} calories={x.recipe.calories} image={x.recipe.image} />
  ))}
    </div>
  )
}

  
  export default BreakfastSearch;
  