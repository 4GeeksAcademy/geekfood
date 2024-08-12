// src/front/js/component/cart.js

import { useState } from 'react';

export const useCart = () => {
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

    return {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateCart
    };
};
