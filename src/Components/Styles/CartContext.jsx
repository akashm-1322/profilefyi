import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    const [money, setMoney] = useState(0);

    useEffect(() => {
        fetch('/sample.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const totalCost = cart.reduce((total, item) => {
            const price = item.price || 0;
            const discountPercentage = item.discountPercentage || 0;
            const quantity = item.quantity || 1;

            const discountedPrice = price - (price * discountPercentage * 0.01);
            return total + (discountedPrice * quantity);
        }, 0);

        setMoney(totalCost);
    }, [cart]);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    
        if (existingItem) {
            if (existingItem.quantity < item.stock) {
                setCart(prevCart => 
                    prevCart.map(cartItem => 
                        cartItem.id === item.id 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                        : cartItem
                    )
                );
                toast.success(`${item.title} quantity updated in cart!`);
            } else {
                toast.error(`${item.title} cannot exceed available stock!`);
            }
        } 
        else{
            toast.success(`${item.title} added to cart!`);
        }

        
    };
    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, data, money, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
