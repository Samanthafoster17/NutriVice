import React, {useState, useEffect} from "react";

export default function Meal({ meal }) {
 const [imageUrl, setImageUrl] = useState("");

  

 useEffect(() => {
     fetch(
         `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d794e7aca5614ee0839c87d4d34ed50c&includeNutrition=false`
     )
     .then((respone) => respone.json())
     .then((data) => {
         setImageUrl(data.image);
         console.log(data)
     })
     .catch(() => {
         console.log("error");
     })
 }, [meal.id])


    return(
        <article>
           <h1>{meal.title}</h1>
           <img src={imageUrl} alt="recipe" />
           <ul>
               <li>Preperation time: {meal.readyInMinutes} minutes </li>
               <li>Number of servings: {meal.servings} </li>
           </ul>

           <a href={meal.sourceUrl}>Go to recipe</a>
        </article>
    )
}