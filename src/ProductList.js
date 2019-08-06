import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';


class ProductList extends Component {

    render() {
        let cartQuantity = Object.values(this.props.cart).reduce((a, b) => a + b, 0);

        let products = [];
        let productList = this.props.products
        for (let product in productList) {
            products.push(
                // <span className="container" key={product}>
                <Product product={productList[product]} id={product} qty={this.props.cart[product]} />
                // </span>
            );
        }

        return (
            <div className="container">
                <div>Items in cart: {cartQuantity}</div>
                {products}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { products: state.products, cart: state.cart }
}

const connectToState =
    connect(mapStateToProps);

export default connectToState(ProductList);
