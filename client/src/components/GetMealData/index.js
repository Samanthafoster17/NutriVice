import React, { useState } from "react";
import MealList from "../MealList";
import { Link } from "react-router-dom";
import "./style.css";


export default function GetMeal({ preferences }) {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);


    function handleChange(e) {
        setCalories(e.target.value)

    }

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=9ea0b3f72d644afe9f02e4073a87573d&timeFrame=day&targetCalories=${calories}&diet=${preferences}`
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

    return (

        <div>
            <div className="getMeals">
                <section className="controls">
                    <input type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange} />
                    <br />
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label"> Use My Suggested Calories  </label>
                </section>
                <p><strong>Note: </strong>You may enter your target calories for the day, or check the box to use your suggested calories that we have calculated with the information you have entered,
               <br /> If no calorie amount is entered and "Use My Suggested Calories" is left unchecked, you will recieve a meal plan based on 2000 calories.<br />
               Please ensure one of these options are completed to provide you the best experience from our team!
            </p>
                <br />
                <button id="filterBtn" className="btn btn-default filter-button" data-filter="irrigation" onClick={getMealData}>Get Daily Meal Plan</button>


                {mealData && <MealList mealData={mealData} calories={calories} />}
            </div>
        </div>

    )
}

