import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CartPage from './HomePage/CartPage/CartPage';
import CheckoutPage from './HomePage/CheckoutPage/CheckoutPage';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default App;
