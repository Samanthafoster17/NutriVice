import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
// import './App.css';
import BMI from "./components/BMI";
import GetMeal from './components/GetMealData';
import DietPref from "./components/DietPref";
import Chart from "./components/Chart";
import LandingPage from "./pages/landingpage/LandingPage";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import SeeData from './components/SeeData';
import SeePref from "./components/SeePref";




function App() {

  return (
    <Router>
      <div className="APP">
        <Nav />
        <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/bmi" component={BMI} />
        <Route exact path="/DietPref" component={DietPref} />
        <Route exact path="/Meal" component={GetMeal} />
        <Route exact path="/Chart" component={Chart} />
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Signin" component={Signin}/>
        <Route exact path="/dashboard"   component={Dashboard}/>
        <Route exact path="/seeData" component={SeeData} /> 
        <Route exact path="/seePref" component={SeePref} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;