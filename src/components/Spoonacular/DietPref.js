
import React, { Component } from 'react'

import { Link } from "react-router-dom";


export default class DietPref extends Component {
  constructor() {
    super();
    this.state = {
      preferences: {
        vegan: false,
        glutenfree: false,
        ketogenic: false,
        paleo: false,
        primal: false,
        whole30: false,
        vegetarian: false,
        lactoVegetarian: false,
        ovoVegetarian: false,
        pescetarian: false,
        none: false,


      },
    };
  }

  handleClick = (event) => {
    const { name, checked } = event.target;

    this.setState((prevState) => {
      const preferences = prevState.preferences;
      preferences[name] = checked;
      return preferences;

    });

  };

  render() {
    const preferences = Object.keys(this.state.preferences)
      .filter((key) => this.state.preferences[key])
      .join(", ");

    return (
      <div className="App">
        <header className="header">
          <h1>Choose Diet Preferences</h1>
        </header>

        <main>
          <div>
            <label>Check all that apply</label>

            <div>
              <input checked={this.state.preferences.vegan} onChange={this.handleClick} type="checkbox" name="vegan" /> vegan
                </div>

            <div>
              <input checked={this.state.preferences.glutenfree} onChange={this.handleClick} type="checkbox" name="glutenfree" /> Gluten Free
                </div>

            <div>
              <input checked={this.state.preferences.ketogenic} onChange={this.handleClick} type="checkbox" name="ketogenic" /> ketogenic
                </div>

            <div>
              <input checked={this.state.preferences.primal} onChange={this.handleClick} type="checkbox" name="primal" /> primal
                </div>

            <div>
              <input checked={this.state.preferences.paleo} onChange={this.handleClick} type="checkbox" name="paleo" /> paleo
                </div>
            <div>
              <input checked={this.state.preferences.whole30} onChange={this.handleClick} type="checkbox" name="whole30" /> whole30
                </div>

            <div>
              <input checked={this.state.preferences.vegetarian} onChange={this.handleClick} type="checkbox" name="vegetarian" /> vegetarian
                </div>
            <div>
              <input checked={this.state.preferences.lactoVegetarian} onChange={this.handleClick} type="checkbox" name="lactoVegetarian" /> Lacto-Vegetarian
                </div>

            <div>
              <input checked={this.state.preferences.ovoVegetarian} onChange={this.handleClick} type="checkbox" name="ovoVegetarian" /> Ovo-Vegetarian
                </div>

            <div>
              <input checked={this.state.preferences.pescetarian} onChange={this.handleClick} type="checkbox" name="pescetarian" /> Pescetarian
                </div>

          </div>
          <p> Your selected preferences are: {preferences}</p>


          <p>If none apply you may continue</p>
          <Link to={"/MealPlan"} >Continue to meal plan</Link>

        </main>
      </div>

    )

  }
}
