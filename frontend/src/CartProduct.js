import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { removeFromCart, addToCart } from './actionCreators';

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd() {
    // Must pass in product id as a string
    this.props.addToCart(this.props.id);
  }
  handleRemove() {
    // Must pass in product id as a string
    this.props.removeFromCart(this.props.id);
  }


  render() {
    let { name, price, description, image_url } = this.props.product

    return (
      <div>
        <Card bg="light" className="m-1" border="light">
          <Card.Img variant="top" src={image_url} alt={{ name }} style={{ maxWidth: "100px", maxHeight: "75px" }} />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ${price} <br></br>
              Qty: {this.props.qty}
            </Card.Subtitle>
            <Card.Text> {description} </Card.Text>
          </Card.Body>
          <Button className="m-1" variant="outline-success" size="sm" onClick={this.handleAdd}>Add to cart</Button>
          <Button className="m-1" variant="outline-danger" size="sm" onClick={this.handleRemove}>Remove from cart</Button>
        </Card>
      </div>
    )
  }
}
const mapDispatchToProps = {
  addToCart,
  removeFromCart
}

export default connect(null, mapDispatchToProps)(CartProduct);