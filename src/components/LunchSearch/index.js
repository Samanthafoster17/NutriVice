


import { useState, useEffect } from "react";
import Lunch from "../Lunch";
import API from "../../utils/API";



function LunchSearch() {
  
  const [recipe, setRecipe] = useState([])
  const term = "Lunch, diet=balanced";
  

  useEffect(() => {
   
    API.getRecipe(term)
    .then(response => setRecipe(response.data.hits))
  }, [])
 
  console.log(recipe)


  
  return (
    <div>
  {recipe.slice(0, 1).map(x => (
    <Lunch key={x.recipe.title} title={x.recipe.label} url={x.recipe.url} calories={x.recipe.calories} image={x.recipe.image} />
  ))}
    </div>
  )
}

  
  export default LunchSearch;
  