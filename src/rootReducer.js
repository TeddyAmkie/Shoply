import db from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';


const INITIAL_STATE = {
    ...db,
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
            return {
                ...state,
                cart: { ...state.cart, [action.id]: state.cart[action.id] - 1 }
            }
        default:
            return state;
    }
}

export default reducer;

