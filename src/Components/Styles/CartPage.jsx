import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemCard from './CartItemCard';
import './CartPage.css';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
    const navigate = useNavigate();
    const totalCost = cart.reduce(
        (total, item) =>
            total + (item.price - item.discountPercentage * 0.01 * item.price) * item.quantity,
        0
    );

    const handleBuyNow = () => {
        navigate('/BuyNow', { state: { totalMoney: totalCost } });
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="cart-container mt-4">
            {cart.map(item => (
                <CartItemCard
                    key={item.id}
                    item={item}
                    stock={item.stock}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
            ))}
            <div className="cart-flex">
            <div className="total-cost">
                <h4>Total Cost: ₹{totalCost.toFixed(2)}</h4>
                <button className="btn btn-success" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <button className="btn btn-primary backhome mt-2" onClick={handleBackToHome}>Back to Home</button>
            </div>
        </div>
    );
};

export default CartPage;
