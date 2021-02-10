import React from "react";
const apiKey = process.env.REACT_APP_API_KEY;

export default class RndmMeal extends React.Component {
    state = {
        meals: []
    }

    componentDidMount() {
        fetch(
           `https://api.spoonacular.com/recipes/random?apiKey=13c3bc5756284452b8d300b93372347b&number=6`
        )
            .then((respone) => respone.json())
            .then((data) => {
                this.setState({ meals: data.recipes });
            })
            .catch(() => {
                console.log("error");
            })
    };

    render() {
        return (




            <div className="container">
                <div className=" col-md-6">
                    <div className="card">
                        {this.state.meals.map(meals => {
                            return (
                                <div className="card-body" >
                                    <h1 className="card-title">{meals.title}</h1>
                                    <img alt="recipe" className="card-img-top" src={meals.image}></img>
                                    <p className="card-text"> Serving Size: {meals.servings} <br />
                                     Health Score: {meals.healthScore} <br />
                                     Preperation Time: {meals.readyInMinutes}</p>
                                    <a id="filterBtnTwo" className="btn btn-default filter-button card-bottom" href={meals.sourceUrl}>Go to recipe</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        )
    }


}