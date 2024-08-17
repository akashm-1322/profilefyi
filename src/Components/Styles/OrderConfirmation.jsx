import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    const location = useLocation();
    const { totalCost } = location.state || { totalCost: 0 };

    return (
        <div className="order-confirmation">
            <h1>Your Order is Placed</h1>
            <p>Total Cost: ₹{totalCost}</p>
        </div>
    );
};

export default OrderConfirmation;
