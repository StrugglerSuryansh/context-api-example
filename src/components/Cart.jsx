// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, calculateTotal } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default Cart;
