import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import NewComponent from './NewComponent';
import ProductList from './ProductList';
import CartPage from './CartPage';

const Home = () => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch('/sample.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, quantity) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <Router>
            <Navbar cart={cart} />
            <Routes>
                {/* Default route or home page */}
                <Route 
                    path="/" 
                    element={<ProductList products={data} addToCart={addToCart} />} 
                />
                
                {/* Cart page to manage cart items */}
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

                {/* Route to the NewComponent when add-to-cart is clicked */}
                <Route 
                    path="/add-to-cart" 
                    element={<NewComponent cart={cart} />} 
                />
            </Routes>
        </Router>
    );
};

export default Home;
