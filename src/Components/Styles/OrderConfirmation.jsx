import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { totalMoney } = location.state || { totalMoney: 0 };

    const handleGoHome = () => {
        navigate('/');
    };

    return (<div>
        <div className="order-confirmation">
            <h1>Your Order is Placed</h1>
            <p>Total Cost: ₹{totalMoney}</p>   
        </div>
        <button className="btn homeback btn-primary" onClick={handleGoHome}>Go to Home</button>
         </div>
    );
};

export default OrderConfirmation;
