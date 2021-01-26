import { useState, useEffect } from "react";
import Dinner from "../Dinner";
import API from "../../utils/API";



function DinnerSearch() {
  
  const [recipe, setRecipe] = useState([])
  const term = "Dinner, diet=balanced";
  

  useEffect(() => {
   
    API.getRecipe(term)
    .then(response => setRecipe(response.data.hits))
  }, [])
 
  console.log(recipe)


  
  return (
    <div>
  {recipe.slice(0, 2).map(x => (
    <Dinner key={x .recipe.title} title={x.recipe.label} url={x.recipe.url} calories={x.recipe.calories} image={x.recipe.image} />
  ))}
    </div>
  )
}

  
  export default DinnerSearch;
  