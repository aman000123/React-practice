// store.js
import { createStore } from 'redux';

const initialState = {
    products: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ],
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        default:
            return state;
    }
};

const store = createStore(cartReducer);

export default store;
