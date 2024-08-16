// src/components/Item.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Item = ({ item }) => {
    const { addItemToCart } = useContext(CartContext);

    return (
        <div>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default Item;
