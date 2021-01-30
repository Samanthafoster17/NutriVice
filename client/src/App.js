import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';
import BMI from "./components/Spoonacular/BMI";
import Spoonacular from './components/Spoonacular';
import DietPref from "./components/Spoonacular/DietPref";
import Chart from "./components/Chart";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";



function App() {

  return (
    <Router>
      <div className="APP">
        <Nav />
        <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/bmi" component={BMI} />
        <Route exact path="/ActivityLevel" component={ActivityLevel} />

        <Route exact path="/DietPref" component={DietPref} />
        <Route exact path="/MealPlan" component={Spoonacular} />
        <Route exact path="/Chart" component={Chart} />
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Signin" component={Signin}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
