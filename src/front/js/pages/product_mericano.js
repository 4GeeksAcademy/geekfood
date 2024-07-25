import React from 'react';
import "../../styles/product.css";

export const Product = () => {
    const productList = [
        { id: 1, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 2, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 3, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 4, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 5, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 6, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 7, name: 'Product name', variant: 'Variant', price: 55 },
        { id: 8, name: 'Product name', variant: 'Variant', price: 55 }
    ];

    return (
        <div className="products-container">
            <div className="products-header">
                <h2>Nuestros platos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
            <div className="products-grid">
                {productList.map(product => (
                    <div key={product.id} className="product-card">
                        <img src="https://via.placeholder.com/150" alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h4>{product.name}</h4>
                            <p>{product.variant}</p>
                            <p className="product-price">${product.price}</p>
                            <button className="add-to-cart-button">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
