// CartContext.js
import React, { createContext, useState } from 'react';

// Define initial flavors without image URLs
const initialFlavors = [
    { name: 'Peach Spritz Refresher', className: 'flavor-peach' },
    { name: 'Cherry Red Dream', className: 'flavor-cherry' },
    { name: 'Strawberry Vanilla Drop', className: 'flavor-strawberry' },
];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (flavorName) => {
        const flavor = initialFlavors.find(f => f.name === flavorName);
        if (flavor && !cartItems.some(item => item.name === flavorName)) {
            setCartItems([...cartItems, flavor]);
        }
    };

    const removeFromCart = (flavorName) => {
        setCartItems(cartItems.filter(item => item.name !== flavorName));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};


