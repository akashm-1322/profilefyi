import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartPage from './CartPage';
import OrderConfirmation from './OrderConfirmation';

const Home = () => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    const [money, setMoney] = useState(0);

    useEffect(() => {
        fetch('/sample.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (item) => {
        setCart(prevCart => [
            ...prevCart,
            { ...item, quantity: 1 } // Add the new item to the cart with a default quantity of 1
        ]);
    };

    // Calculate the total money whenever the cart changes
    useEffect(() => {
        const totalCost = cart.reduce((total, item) => {
            const price = item.price || 0; // Ensure price is a number
            const discountPercentage = item.discountPercentage || 0; // Ensure discountPercentage is a number
            const quantity = item.quantity || 1; // Ensure quantity is a number

            const discountedPrice = price - (price * discountPercentage * 0.01);
            return total + (discountedPrice * quantity);
        }, 0);

        setMoney(totalCost);
    }, [cart]);

    const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(prevCart => 
            prevCart.map(item => {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        // Decrease the quantity by 1
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        // Remove the item completely if quantity is 1
                        return null;
                    }
                }
                return item;
            }).filter(item => item !== null) // Filter out null items
        );
    };
    

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route 
                    path="/" 
                    element={<ProductList products={data} addToCart={addToCart} />} 
                />
                <Route 
                    path="/cart" 
                    element={
                        <CartPage 
                            cart={cart} 
                            updateQuantity={updateQuantity} 
                            removeFromCart={removeFromCart} 
                        />
                    } 
                />
                <Route 
                    path="/BuyNow"
                    element={
                        <OrderConfirmation
                            totalMoney={money}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default Home;
