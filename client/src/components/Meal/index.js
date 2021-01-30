import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=9ea0b3f72d644afe9f02e4073a87573d&includeNutrition=false`
        )
            .then((respone) => respone.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log("error");
            })
    }, [meal.id])


    return (

        <article>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <h1>{meal.title}</h1>
                <img src={imageUrl} alt="recipe" className="img-responsive" />
                <ul>
                    <li>Preperation time: {meal.readyInMinutes} minutes </li>
                    <li>Number of servings: {meal.servings} </li>
                </ul>


                <button id="filterBtnTwo" className="btn btn-default filter-button" href={meal.sourceUrl}>Go to recipe</button>
            </div>

        </article>



    )
}