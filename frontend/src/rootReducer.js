import products from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';


const INITIAL_STATE = {
    ...products,
    cart: {
    }
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        // Pass in product id in action
        case ADD_TO_CART:
            return {
                ...state,
                cart: { ...state.cart, [action.id]: (state.cart[action.id] + 1 || 1) }
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
                cart: newCart
                // 
            }
        default:
            return state;
    }
}

export default reducer;

