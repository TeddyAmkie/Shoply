import { ADD_TO_CART, REMOVE_FROM_CART, GET_ALL_PRODUCTS, GET_DISCOUNT } from './actionTypes';

const INITIAL_STATE = {
    cart: {
    },
    products: {

    },
    discounts: {

    }
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        // PRODUCT ACTIONS
        case GET_ALL_PRODUCTS:
            let products = {};
            action.products.forEach((product) => products[product.id] = product)
            return {
                ...state,
                products
            }

        // CART ACTIONS


        // Pass in product id in action
        case ADD_TO_CART:
            return {
                ...state,
                cart: { ...state.cart, [action.id]: (state.cart[action.id] + 1 || 1) },
                products: {
                    ...state.products,
                    [action.id]: {
                        ...state.products[action.id],
                        quantity: (state.products[action.id].quantity - 1)
                    }
                }
            }
        // Pass in product id in action
        case REMOVE_FROM_CART:
            let newCart = { ...state.cart }

            // delete item from cart if only 1 left
            if (newCart[action.id] === 1) {
                delete newCart[action.id]
            }

            // if more than 1, decrement
            else if (newCart[action.id] > 1) {
                newCart = { ...state.cart, [action.id]: state.cart[action.id] - 1 }
            }

            return {
                ...state,
                cart: newCart,
                products: {
                    ...state.products,
                    [action.id]: {
                        ...state.products[action.id],
                        quantity: (state.products[action.id].quantity + 1)
                    }
                }
                // 
            }
        case GET_DISCOUNT:
            return {
                ...state,
                discounts: {
                    ...action
                }
            }
        default:
    return state;
}
}

export default reducer;

