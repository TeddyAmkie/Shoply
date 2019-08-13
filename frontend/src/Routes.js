import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './containers/Cart'
import ProductList from './containers/ProductList'

class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/products" render={() => <ProductList />} />
      </Switch>
    )
  }
}
export default Routes;