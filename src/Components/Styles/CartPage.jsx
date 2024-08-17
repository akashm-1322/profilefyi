import React from 'react';
import CartItemCard from './CartItemCard';
import './CartPage.css';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
    const totalCost = cart.reduce((total, item) => total + (item.price - (item.discountPercentage * 0.01 * item.price)) * item.quantity, 0);

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
            <div className="total-cost">
                <h4>Total Cost: ₹{totalCost.toFixed(2)}</h4>
                <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    );
};

export default CartPage;
