import React from 'react';
import './NewComponent.css'; // Assuming you have a stylesheet for styling

const NewComponent = ({ product }) => {
    if (!product) return <div>No product selected</div>;

    return (
        <div className="new-component">
            <h2>{product.title}</h2>
            <img src={product.images} alt={product.title} />
            <p>Price: ₹{product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Discounted Price: ₹{product.price - (product.discountPercentage * 0.01 * product.price)}</p>
            <p>Items Left: {product.stock}</p>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
                <div>
                    <p>Available Sizes:</p>
                    <ul className='sizes'>
                        {product.sizes.map((size, index) => (
                            <li className="circle" key={index}>{size}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Colors */}
            <p>Available Colors:</p>
            <ul className='colors'>
                {product.colors.map((color, index) => (
                    <li className="circle" key={index} style={{ backgroundColor: color.toLowerCase() }}>
                        {color}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewComponent;

