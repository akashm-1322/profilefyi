import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import NewComponent from './NewComponent';

const Home = () => {
    const [cart, setCart] = useState([]);

    // Example product data
    const product = {
        title: 'Sample Product',
        price: 1000,
        discountPercentage: 10,
        stock: 5,
        images: 'path/to/image.jpg',
        colors: ['Red', 'Blue', 'Green'],
        sizes: ['S', 'M', 'L'],
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <Router>
            <Navbar cart={cart} />
            <Routes>
                {/* Default route or home page */}
                <Route path="/" element={<div>Welcome to the Shop</div>} />
                
                {/* Route to the NewComponent when add-to-cart is clicked */}
                <Route 
                    path="/add-to-cart" 
                    element={<NewComponent product={product} addToCart={addToCart} />} 
                />
            </Routes>
        </Router>
    );
};

export default Home;
