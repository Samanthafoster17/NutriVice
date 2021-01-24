// import Signup from './components/Signup';
import './App.css';
// import SearchResultContainer from './components/SearchResultContainer';
// import RecipeSearch from './components/RecipeSearch';
import BreakfastSearch from "./components/BreakfastSearch";
import SnackSearch from "./components/SnackSearch";
import LunchSearch from "./components/LunchSearch";
import DinnerSearch from "./components/DinnerSearch";


function App(){
  // return <Signup />
  // return <SearchResultContainer />;
return (
  <div className="APP">
    {/* <RecipeSearch /> */}
    <BreakfastSearch />
    <SnackSearch />
    <LunchSearch />
    <SnackSearch />
    <DinnerSearch />
  </div>
)
}

export default App;
