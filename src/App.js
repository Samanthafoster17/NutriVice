import { BrowserRouter as Router, Route } from "react-router-dom";
// import Signup from './components/Signup';
import './App.css';
import BMI from "./components/Spoonacular/BMI";
import Spoonacular from './components/Spoonacular';
import DietPref from "./components/Spoonacular/DietPref";


function App() {

  // return <Signup />
  // return <SearchResultContainer />;
  return (
    <Router>
      <div className="APP">

        <Route exact path="/" component={BMI} />
        <Route exact path="/DietPref" component={DietPref} />
        <Route exact path="/MealPlan" component={Spoonacular} />

      </div>
    </Router>
  )
}

export default App;
