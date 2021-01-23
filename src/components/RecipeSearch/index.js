

import axios from "axios";
import { useState, useEffect } from "react";
import Recipe from "../Recipe";



function RecipeSearch() {

  const API_ID = "7209541c";
  const API_KEY = "9135d9ba9da334cbd46241e33e938b6e";
 
  
  const [recipe, setRecipe] = useState([])


  useEffect(() => {
    getRecipe()
  }, [])
 


  const getRecipe = () => { axios.request(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`)
   .then(response => setRecipe(response.data.hits))
 
}
console.log(recipe)

 
  

  return (
    <div>
  {recipe.map(x => (
    <Recipe title={x.recipe.label} calories={x.recipe.calories} image={x.recipe.image} />
  ))}
    </div>
  )


}

  
  export default RecipeSearch;
  