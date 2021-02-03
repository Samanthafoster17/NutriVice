import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Navbar from "./components/Navbar";
// import LandingPage from "./pages/LandingPage";

import Calendar from "./components/calendar/Calendar";

import Circle from "./components/circleprogressbars/Circle"

// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Navbar /> */}
        {/* <Switch> */}
          {/* <Route path = "/" exact component = {LandingPage} /> */}
        {/* </Switch> */}
      {/* </Router> */}

      {/* <Calendar /> */}

      <Circle />

    </div>
  );
}

export default App;