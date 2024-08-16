// src/App.jsx
import React from 'react';
import './App.css'; // Import the CSS file
import { CartProvider } from './context/CartContext';
import Item from './components/Item';
import Cart from './components/Cart';

const App = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 150 },
    { id: 3, name: 'Item 3', price: 200 },
  ];

  return (
    <CartProvider>
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="items">
          {items.map(item => (
            <div key={item.id} className="item">
              <Item item={item} />
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
