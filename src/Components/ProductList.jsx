import React from 'react';
import Products from './Products';
import './Styles/ProductList.css'; 

const ProductList = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <Products key={product.product_id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
