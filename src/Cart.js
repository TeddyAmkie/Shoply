import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import CartProduct from "./CartProduct";
import {calculateTotalWithTax} from './helperFunctions';


class Cart extends Component {
  render() {
    let cart = this.props.cart
    let cartKeys = Object.keys(cart)
    let totalPrice = 0;
    let items = cartKeys.map(item => {
      let product = this.props.products[item];
      totalPrice += (product.price * (cart[item]))
      return < CartProduct product={product} id={item} qty={cart[item]} > </CartProduct>
    })
    return (
      <div>
        <Card bg="light" style={{ width: '24rem' }}>
          {items}
          <Card.Header>Subtotal: ${totalPrice.toFixed(2)} Total: ${calculateTotalWithTax(totalPrice)}  </Card.Header>
        </Card>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return { products: state.products, cart: state.cart }
}

const connectToState =
  connect(mapStateToProps);

export default connectToState(Cart);
