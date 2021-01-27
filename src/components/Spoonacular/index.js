import React, {useState} from "react";
import MealList from "./MealList";

function Spoonacular(preferences) {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

   function handleChange(e) {
    setCalories(e.target.value)
   }
function getMealData() {
  fetch(
  `https://api.spoonacular.com/mealplanner/generate?apiKey=949cc38773a947e191d05b89a2b7e263&timeFrame=day&targetCalories=${calories}&diet=${preferences}`
  )
  .then((response) => response.json())
  .then((data) => {
      setMealData(data);
      console.log(data)
      console.log(preferences)
  })
  .catch(() => {
      console.log("error");
  })
}

    return(
        <div className="spoon">
        <section className="controls">
            <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange} />
        </section>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        {mealData && <MealList mealData={mealData} />}
        </div>
    )
}

export default Spoonacular;