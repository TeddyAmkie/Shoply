import React, { Component } from 'react';
import { addToCart, removeFromCart } from '../actionCreators';
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
        // Must pass in product id as a string
        this.props.addToCart(this.props.id);
    }
    handleRemove() {
        // Must pass in product id as a string
        this.props.removeFromCart(this.props.id);
    }

    render() {
        let { name, price, description, image_url, quantity } = this.props.product
        if (description.length > 40) {
            description = description.substring(0, 40) + "...";
        }
        return (
            <Card className="text-center m-2 " style={{ maxWidth: "30%", maxHeight: "5%", verticalAlign: "text-top", display: "inline-block" }}>
                <Card.Header>{name} </Card.Header>
                <p>Price: {price} </p>
                <p> Quantity in cart: {this.props.qty}</p>
                <Card.Text> {description}</Card.Text>
                <img src={image_url} alt={{ name }} style={{ maxWidth: "auto", maxHeight: "75px" }} ></img> <br></br>
                <Button className="m-1" variant="outline-success" size="sm" hidden={quantity === 0} onClick={this.handleAdd}>Add to cart</Button>
                <Button className="m-1" variant="outline-danger" size="sm" hidden={this.props.qty === 0} onClick={this.handleRemove}>Remove from cart</Button>
                <br></br>
            </Card>
        )
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart
}

export default connect(null, mapDispatchToProps)(Product);