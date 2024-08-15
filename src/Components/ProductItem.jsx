import React from "react";

function ProductItem({ product, onAddToCart }) {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddClick = () => {
        setIsAdding(true);
        onAddToCart(product);
        setTimeout(() => setIsAdding(false), 500); // Reset after animation
    };

    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button 
                onClick={handleAddClick} 
                className={isAdding ? 'added-to-cart' : ''}
            >
                Add to Cart
            </button>
        </div>
    );
}


export default ProductItem;