import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import AuthForm from './AuthForm';

class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/products" render={() => <ProductList />} />
        <Route exact path="/login" render={() => <AuthForm /> } />
      </Switch>
    )
  }
}
export default Routes;