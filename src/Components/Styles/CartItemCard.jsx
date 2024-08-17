import React, { useState } from 'react';
import './CartItemCard.css';

const CartItemCard = ({ item, updateQuantity, removeFromCart , stock }) => {
    const [editMode, setEditMode] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleSave = () => {
        updateQuantity(item.id, quantity);
        setEditMode(false);
    };



    return (
        <div className="card mb-4">
            <img className="card-img-top" src={item.images} alt={item.title} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ₹{item.price}</p>
                <p className="card-text">Discounted Price: ₹{item.price - (item.discountPercentage * 0.01 * item.price)}</p>


                
                {editMode ? (
                    <div>
                        <input 
                            type="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))} 
                            min="1" 
                            max={stock}
                            className="form-control mb-2"
                        />
                        <button className="btn btn-success" onClick={handleSave}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p>Quantity: {quantity}</p>
                        <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit</button>
                    </div>
                )}

                <button className="btn btn-danger mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItemCard;
