import React, { useState } from 'react';
import ProductList from './ProductList';
import CartIcon from './CartIcon';

function Shop() {
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <CartIcon cartCount={cart.length} />
            <ProductList onAddToCart={handleAddToCart} />
        </div>
    );
}

export default Shop;
