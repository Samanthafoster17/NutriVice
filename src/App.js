import Signup from './components/Signup';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchResultContainer from './components/SearchResultContainer';



function App(){
 
  return(
    <div>
    <Nav />
    <Signup />
        {/* <SearchResultContainer />; */}
    </div>
  )
 
}

export default App;
