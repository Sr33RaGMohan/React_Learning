import './App.css';
import React from 'react';
import AboutList from './components/AboutList';
import HomePage from './components/HomePage';
import ListItems from './components/ListItems';
import Weather from './components/Weather';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PieChart from './components/pieChart';

function App() {
  return (
    <Router>
        <Switch>
          <Route path ='/' exact component={HomePage} />npm
          <Route path ='/About' exact component={AboutList}/>
          <Route path ='/AppPage' component={ListItems}/>
          <Route path= '/WeatherData' component={Weather}/>
          <Route path= '/pieChart' component={PieChart}/>

        </Switch>
    </Router>
  );
}

export default App;
