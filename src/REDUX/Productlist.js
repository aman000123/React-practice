// ProductList.js
import React from 'react';
import { connect } from 'react-redux';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {console.log(products)}
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
