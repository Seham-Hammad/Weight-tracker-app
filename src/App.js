import React from 'react';
import './App.css';
import image from './images/image.jpg';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Measures from './Components/Measures';
import AddMeasures from './Components/AddMeasures';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink to="/" className="App-link">
                <img className="card--image" src={image} alt='' />
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/measuresDetails" className="App-link">
                Measures Detials
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/addMeasures" className="App-link">
                Add Measures
              </NavLink>
            </li>
          </ul>

          <Route path='/' exact component={Home} />
          <Route path='/measuresDetails' component={Measures} />
          <Route path='/addMeasures' component={AddMeasures} />

        </header>
      </div>
    </Router>
  );
}

export default App;
