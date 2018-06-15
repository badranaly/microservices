import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import SellingComponent from './components/SellingComponent';
import SingleProductComponent from './components/SingleProductComponent';
import AccountComponent from './components/AccountComponent';


class App extends Component {
  constructor(){
    super();
  }

  render() {

    const HomeComponent = () => <Home />
    const ProductsComponent = () => <Products />
    const SellComponent = () => <SellingComponent />
    const SelectedProdComponent = () => <SingleProductComponent />
    const UserAccountComponent = () => <AccountComponent />

    return (
      <Router>
        <div>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/sell' component={SellComponent} />
        <Route exact path='/products' component={ProductsComponent} />
        <Route exact path='/products/:id' render={SelectedProdComponent} />
        <Route exact path='/myaccount' render={UserAccountComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
