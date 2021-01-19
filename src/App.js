import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: {q: 'chicken'},
      headers: {
        'x-rapidapi-key': '5ae314507amsh08d20dc5a100a62p133dc6jsn10814122861f',
        'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);

    }).catch(function (error) {
      console.error(error);
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          hits: json,
        })
      })
      .catch(err => {
        console.error(err);
      });

  }

  render() {
    var { isLoaded, hits } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        <div className="App">

          <ul>
            { hits.recipe.map(hits => (
              <li key={hits.recipe.label}>
                Recipe: {hits.recipe.label} | Calories: {hits.recipe.calories}
              </li>

            ))}
          </ul>

        </div>
      );
    }
  }

}

export default App;
