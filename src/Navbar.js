import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import {cartQuantity} from './helperFunctions';

class Navbar extends Component {

  render() {
    const activeStyles = {
      fontWeight: "bold",
      color: "black"

  }

return (
  <div className="Navigation navbar navbar-expand-md" style={{ borderBottom: "2px solid rgba(0,0,0,.125)", marginBottom: "50px" }}>
    <NavLink className="navbar-brand" style={{ display: "inline-block" }} to="/">Shoply</NavLink>
    <NavLink to="/products" style={{fontSize: "16px"}} activeStyle={activeStyles}> Products </NavLink>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4"><NavLink to="/cart" style={{fontSize: "16px"}} activeStyle={activeStyles}><i className=" fas fa-shopping-cart"></i> </NavLink></li>
       Items: {cartQuantity(this.props.cart)}
    </ul>
  </div>
)
  }
}

function mapStateToProps(state) {
  return { products: state.products, cart: state.cart }
}

const connectToState =
  connect(mapStateToProps);

export default connectToState(Navbar);
