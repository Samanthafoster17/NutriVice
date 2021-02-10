import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiCreativeCommonsZeroLine } from 'react-icons/ri';

const UserMeals = (meal) => {
    const [imageurl, setImageUrl] = useState("");
    const [mealDetails, setMealDetails] = useState("");


    const getRandomMeals = () => {
       axios.get("https://api.spoonacular.com/recipes/random?number=100&tags=vegeterian,dessert&apiKey=ef0e4c3644cb4ccd9e431d6e807f89e4")
       .then(res => {
           console.log(res);
       })
    }

    return(
        <div className="container">
            <section>
                <div className="card">
                    
                    <button type="button" className="btn btn-primary" onClick={getRandomMeals}>Get meals</button>
                    <p>{mealDetails}</p>
                </div>
            </section>
        </div>
    )
}

export default UserMeals;