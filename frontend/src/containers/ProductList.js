import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

class ProductList extends Component {

    render() {
        // Get the total quantity of items in the redux state cart


        let productListKeys = Object.keys(this.props.products);
        let productList = this.props.products;
        let products = productListKeys.map(product =>
            <Product key={product} product={productList[product]} id={product} qty={this.props.cart[product]} />)

        return (
            <div>
                <Jumbotron className="text-center" fluid style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2017/06/28/16/50/amazing-2451327_640.jpg)", backgroundSize: "cover", height: "100%" }}>
                    <h1>Summer Sale!</h1>
                    <p> Use SUMMER20 at check out!</p>
                </Jumbotron>
            <div className="container">
                {products}
            </div>
            </div >
        )
    }
}


function mapStateToProps(state) {
    return { products: state.products, cart: state.cart }
}

const connectToState =
    connect(mapStateToProps);

export default connectToState(ProductList);
