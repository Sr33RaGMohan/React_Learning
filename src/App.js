import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AboutPage from './AboutPage';
// import ProductsPage from './ProductsPage';
// import pieChart from './pieChart';
import DataDisplay from '../src/Code_Wipro_1/DataDisplay';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active-link">About</Link>
          </li>
          <li>
            <Link to="/products" activeClassName="active-link">Product</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/products" component={ProductsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;