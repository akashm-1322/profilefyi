import React from 'react';
import './ProductList.css'

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img className="card-img-top" src={product.images} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Actual Price:  <s>₹{product.price}</s></p>
                                <p className="card-text">Discounted Price:   
                                    <b>₹{product.price - (product.discountPercentage * 0.01 * product.price)}</b></p>
                                <p className="card-text">Items Left: {product.stock}</p>

                              <div className="button-flex"> 
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add To Cart</button>

                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => window.open(product.features, '_blank')}
                                >
                                    View Specs site
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
