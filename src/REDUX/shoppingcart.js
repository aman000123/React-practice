// ShoppingCart.js
import React from 'react';
import { connect } from 'react-redux';

const ShoppingCart = ({ cartItems }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
});

export default connect(mapStateToProps)(ShoppingCart);
