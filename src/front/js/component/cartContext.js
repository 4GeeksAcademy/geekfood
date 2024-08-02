// src/front/js/component/cartContext.js

import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const CartContext = createContext();

// Hook para utilizar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (dish) => {
        const exists = cart.find(item => item.id === dish.id);
        if (exists) {
            setCart(cart.map(item => item.id === dish.id ? { ...item, quantity: item.quantity + dish.quantity } : item));
        } else {
            setCart([...cart, { ...dish, quantity: dish.quantity }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateCart = (id, delta) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};
