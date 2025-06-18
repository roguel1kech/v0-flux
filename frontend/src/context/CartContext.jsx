import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Сохранение корзины в localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Добавление товара в корзину
    const addToCart = useCallback((product) => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    }, []);

    // Удаление товара из корзины
    const removeFromCart = useCallback((productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    }, []);

    // Изменение количества товара
    const updateQuantity = useCallback((productId, newQuantity) => {
        if (newQuantity < 1) return;

        setCart(prev =>
            prev.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    }, []);

    // Подсчет общей суммы
    const getTotal = useCallback(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};