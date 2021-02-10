import React from "react";
import Meal from "../Meal";

export default function MealPlan({weeklyData}) {
    const nutrients = weeklyData.nutrients;

    
    return(
       <main>
           <section className="weeklyplan">
               <h1>Weekly Meal Plan</h1>
               <ul>
                   <li>Calorie: {nutrients.calories.toFixed(0)}</li>
                   <li>Carbohydrate: {nutrients.carbohydrates.toFixed(0)}</li>
                   <li>Fat: {nutrients.fat.toFixed(0)}</li>
                   <li>Protien {nutrients.protein.toFixed(0)}</li>
               </ul>
          
           </section>

           <section className="meals">
               {weeklyData.meals.map((meal) => {
                   return <Meal key={meal.id} meal={meal} />
               })}
           </section>
       </main>
    )
}