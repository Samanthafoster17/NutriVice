// import Signup from './components/Signup';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchResultContainer from './components/SearchResultContainer';
import Spoonacular from './components/Spoonacular';

// import SearchResultContainer from './components/SearchResultContainer';
// import RecipeSearch from './components/RecipeSearch';
// import BreakfastSearch from "./components/BreakfastSearch";
// import SnackSearch from "./components/SnackSearch";
// import LunchSearch from "./components/LunchSearch";
// import DinnerSearch from "./components/DinnerSearch";

function App(){
 
  return(
    <div>
    <Nav />
    <Signup />
        {/* <SearchResultContainer />; */}
    </div>
  )
  }
// function App(){
//   // return <Signup />
//   // return <SearchResultContainer />;
// return (
//   <div className="APP">
//      <Spoonacular />
//     {/* <RecipeSearch /> */}
//     {/* <BreakfastSearch /> */}
//     {/* <SnackSearch /> */}
//     {/* <LunchSearch /> */}
//     {/* <SnackSearch /> */}
//     {/* <DinnerSearch /> */}
//   </div>
// )}

export default App;
