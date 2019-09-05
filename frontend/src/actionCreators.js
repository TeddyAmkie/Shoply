import { ADD_TO_CART, REMOVE_FROM_CART, GET_ALL_PRODUCTS, GET_DISCOUNT } from './actionTypes';
import axios from 'axios';

const BASE_URL = "http://localhost:3001"
// Get all products thunk
export function getProductsFromAPI() {
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/products`);
        dispatch(gotProducts(res.data.products));
    };
};

// get all products action
function gotProducts(products) {
    return {
        type: GET_ALL_PRODUCTS,
        products
    };
};

export function getDiscount(promocode) {
    return async function (dispatch) {
        let res = await axios.post("http://localhost:3001/products/promo", {
            promocode
        });
        dispatch(gotDiscount(res.data));
    };
};

export function gotDiscount(promoData) {
    return {
        type: GET_DISCOUNT,
        promoData
    }
}

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    };
};

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    };
};