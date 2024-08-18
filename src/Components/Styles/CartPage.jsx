import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import CartItemCard from './CartItemCard';
import './CartPage.css';

const CartPage = () => {
    const navigate = useNavigate();
    const { cart, updateQuantity, removeFromCart, money } = useContext(CartContext);
    const globalDiscount = 10;
    const totalCostAfterDiscount = money * (1 - globalDiscount / 100);

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleBuyNow = () => {
        navigate('/BuyNow', { state: { totalMoney: totalCostAfterDiscount.toFixed(2) } });
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
                    <h4>Total Cost: ₹{totalCostAfterDiscount.toFixed(2)} (10% discount applied)</h4>
                    <button className="btn btn-success" onClick={handleBuyNow}>Buy Now</button>
                </div>
                <button className="btn btn-primary backhome mt-2" onClick={handleBackToHome}>Back to Home</button>
            </div>
        </div>
    );
};

export default CartPage;
