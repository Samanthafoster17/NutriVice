import React, {useState} from "react";
import MealList from "./MealList";

function Spoonacular() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const[exclude, setExclude] = useState("");

   function handleChange(e) {
    setCalories(e.target.value)
    // setExclude(e.target.value)
   }
 
function getMealData() {
  fetch(
  `https://api.spoonacular.com/mealplanner/generate?apiKey=d794e7aca5614ee0839c87d4d34ed50c&timeFrame=day&targetCalories=${calories}`
  )
  .then((response) => response.json())
  .then((data) => {
      setMealData(data);
      console.log(data)
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
            <input
            type="string"
            placeholder="Exlcude "
            onChange={handleChange} />
        </section>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        {mealData && <MealList mealData={mealData} />}
        </div>
    )
}

export default Spoonacular;