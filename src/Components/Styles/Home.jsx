import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartPage from './CartPage';

const Home = () => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    const total = 0;

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

    const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };


    return (
        <Router>
            <Navbar/>
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
            </Routes>
        </Router>
    );
};

export default Home;
