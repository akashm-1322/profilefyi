import React from 'react';
import './Styles/Product.css';
import NewComponent from './NewComponent'
import { useState } from 'react';

const Product = ({ product }) => {

    const [showNewComponent, setShowNewComponent] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

const handleClick = () =>{
    setSelectedProduct(product);
    setShowNewComponent(true);
}
  return (
    <div className="card">
      <img className="card-img-top" src={product.images} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text"><s>₹{product.price}</s></p>
        <p className="card-text">Discounted Price: 
            <b>₹{product.price - (product.discountPercentage * 0.01 * product.price)}</b></p>
        <p className="card-text">Items Left: {product.stock}</p>

        {/* Conditional rendering for sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div>
            <p className="card-text">Available Sizes:</p>
            <ul className='sizes'>
              {product.sizes.map((size, index) => (
                <li className="circle" key={index}>{size}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Colors rendering */}
        <p className="card-text">Available Colors:</p>
        <ul className='colors'>
          {product.colors.map((color, index) => (
            <li className="circle" key={index}>{color}</li>
          ))}
        </ul>

        <button className='Cart' onClick={handleClick}>AddToCart</button>

                {showNewComponent && (
                    <NewComponent product={selectedProduct} />
                )}
      </div>
    </div>
  );
};

export default Product;
