import React, { useState } from "react";

const NewComponent = ({ product = {}, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            quantity: Number(quantity),
        };
        if (typeof addToCart === "function") {
            addToCart(cartItem);
        } else {
            console.error("addToCart is not a function");
        }
    };

    return (
        <div className="new-component">
            <h2>{product.title}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Discounted Price: ₹{product.price - (product.discountPercentage * 0.01 * product.price)}</p>
            <p>Available Stock: {product.stock}</p>

            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                min="1"
                max={product.stock}
                onChange={handleQuantityChange}
            />
            <button onClick={handleAddToCart}>Confirm Add to Cart</button>
        </div>
    );
};

export default NewComponent;
