import React from 'react';
import './CartPage.css'; // Assuming you have this stylesheet

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const discountPrice = item.price - (item.discountPercentage * 0.01 * item.price);
            return total + discountPrice * item.quantity;
        }, 0);
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-items">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.images} alt={item.title} />
                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>Price: ₹{item.price}</p>
                                <p>Discounted Price: ₹{item.price - (item.discountPercentage * 0.01 * item.price)}</p>
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                                    min="1" 
                                />
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ₹{calculateTotal()}</h3>
        </div>
    );
};

export default CartPage;
