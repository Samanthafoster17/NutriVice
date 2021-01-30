import React from "react";
import Meal from "./Meal";

export default function MealList({mealData}) {
    const nutrients = mealData.nutrients;

    
    return(
       <main>
           <section className="nutrient">
               <h1>Macros</h1>
               <ul>
                   <li>Cal: {nutrients.calories.toFixed(0)}</li>
                   <li>Carb: {nutrients.carbohydrates.toFixed(0)}</li>
                   <li>Fat: {nutrients.fat.toFixed(0)}</li>
                   <li>Protien: {nutrients.protein.toFixed(0)}</li>
                   <li>Allergens:</li>
               </ul>
           </section>

           <section className="meals">
               {mealData.meals.map((meal) => {
                   return <Meal key={meal.id} meal={meal} />;
               })}
           </section>
       </main>
    )
}