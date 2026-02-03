import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('food_delivery_cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('food_delivery_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (dish) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === dish.id);
            if (existing) {
                return prev.map(item =>
                    item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...dish, quantity: 1 }];
        });
    };

    const removeFromCart = (dishId) => {
        setCartItems(prev => prev.filter(item => item.id !== dishId));
    };

    const updateQuantity = (dishId, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === dishId) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const clearCart = () => setCartItems([]);

    const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        totalItems
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
