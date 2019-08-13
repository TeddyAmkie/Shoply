import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './ProductCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { getProductsFromAPI } from '../actionCreators';

class ProductList extends Component {

    async componentDidMount() {
        if (Object.keys(this.props.products).length === 0) {
            await this.props.getProductsFromAPI()
        }
    }

    render() {
        // Get the total quantity of items in the redux state cart
        let products;
        if (this.props.products) {
            let productListKeys = Object.keys(this.props.products);
            let productList = this.props.products;
            products = productListKeys.map(product =>
                <Product
                    key={product}
                    product={productList[product]}
                    id={product}
                    qty={this.props.cart[product] || 0} />)
        }
        return (
            <div>
                <Jumbotron className="text-center" fluid style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2017/06/28/16/50/amazing-2451327_640.jpg)", backgroundSize: "cover", height: "100%" }}>
                    <h1>Summer Sale!</h1>
                    <p> Use SUMMER20 at check out!</p>
                </Jumbotron>
                <div className="container">
                    {this.props.products ? products : "Loading..."}
                </div>
            </div >
        )
    }
}


function mapStateToProps(state) {
    return { products: state.products, cart: state.cart }
}

const connectToState =
    connect(mapStateToProps, { getProductsFromAPI });

export default connectToState(ProductList);
