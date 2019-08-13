import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import CartProduct from "../containers/CartProduct";
import { calculateTotalWithTax, applyDiscount } from '../helperFunctions';
import Discount from './Discount';


class Cart extends Component {

  render() {
    let cart = this.props.cart
    let cartKeys = Object.keys(cart)
    let totalPrice = 0;
    let items = cartKeys.map(item => {
      let product = this.props.products[item];
      totalPrice += (product.price * (cart[item]))
      return < CartProduct key={item} product={product} id={item} qty={cart[item]} > </CartProduct>
    })
    let discount = 0;
    console.log(this.props);
    if (this.props.discounts) {
      discount = applyDiscount(totalPrice,
        this.props.discounts.promotion.amount, this.props.discounts.promotion.discount_type)
    }
    totalPrice = calculateTotalWithTax(totalPrice - discount)
    return (
      <div>
        <Card bg="light" style={{ width: '24rem' }}>
          {items}
          <Card.Header>Subtotal:
             ${totalPrice.toFixed(2)} <br></br>
            Total: ${totalPrice} <br></br>
            Discount: {discount}
          </Card.Header>
          <Card.Header><Discount /> </Card.Header>
        </Card>

      </div >

    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
    discounts: state.discounts.promoData
  }
}

const connectToState =
  connect(mapStateToProps);

export default connectToState(Cart);
