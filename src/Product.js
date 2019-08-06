import React, { Component } from 'react';
import { addToCart, removeFromCart } from './actionCreators';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Product extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        this.props.addToCart(this.props.id);
    }

    handleRemove() {
        this.props.removeFromCart(this.props.id);
    }

    render() {
        const { name, price, description, image_url } = this.props.product
        return (
                <Card className="text-center m-2" style={{ maxWidth: "auto", maxHeight: "600px", display: "inline-block" }}>
                    <Card.Header>{name} </Card.Header>
                    <p>Price: {price} </p>
                    <p> Quantity in cart: {this.props.qty}</p>
                    <Card.Text> Description: {description}</Card.Text>
                    <img src={image_url} alt={{ name }} style={{ maxWidth: "auto", maxHeight: "150px" }} ></img> <br></br>
                    <Button className="m-1" variant="success" size="sm" onClick={this.handleAdd}>Add to cart</Button>
                    <Button className="m-1" variant="primary-outline" size="sm" onClick={this.handleRemove}>Remove from cart</Button>
                </Card>
        )
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart
}

export default connect(null, mapDispatchToProps)(Product);