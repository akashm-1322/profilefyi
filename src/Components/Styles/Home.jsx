import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartPage from './CartPage';
import OrderConfirmation from './OrderConfirmation';
import { CartProvider } from './CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/BuyNow" element={<OrderConfirmation />} />
                </Routes>
            </Router>
            <ToastContainer />
        </CartProvider>
    );
};

export default Home;
