// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to manage the cart state
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    // Function to calculate the total bill
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
