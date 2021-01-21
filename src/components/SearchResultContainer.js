import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../utils/API";
import axios from 'axios';


class SearchResultContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        hits: [],
        isLoaded: false,
      };
    }
  
    componentDidMount() {
     
      
      axios.request(API).then(response => this.setState({
        hits: response.data,
        isLoaded: true
      }))
        
      .catch(err =>{
        console.log(err);
      });
  
    }
    
  
    render() {
      var { isLoaded, hits } = this.state;
      console.log(this.state)
  
      if (!isLoaded) {
        return <div>Loading...</div>
      }
  
      else {
        return (
          <div className="App">
  
            <ul>
              { hits.hits.map(hits => (
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
  
  export default SearchResultContainer;
  