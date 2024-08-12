import React, { useState } from 'react';
import "../../styles/product.css";

export const Product = () => {
    const productList = [
        { id: 1, name: 'Product name', variant: 'Variant', price: 85 },
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
                <h2>Products</h2>
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



export const DiscoverProducts = () => {
    return (
        <div className="discover-products-container">
            <div className="discover-products-content">
                <h2>Descubre nuestra amplia variedad de platos</h2>
                <p>
                    En nuestra app de comida rápida, podrás disfrutar de una experiencia única. Realiza pedidos, sigue la ubicación del repartidor y descubre la categoría de productos que tenemos para ti.
                </p>
                <div className="product-features">
                    <div className="feature">
                        <img src={imgComidaAmericana} alt="Americana" />
                        <h4>Americana</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaChina} alt="China" />
                        <h4>China</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaKoreana} alt="Coreana" />
                        <h4>Coreana</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaEspañola} alt="Española" />
                        <h4>Española</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaIndia} alt="India" />
                        <h4>India</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaItaliana} alt="Italiana" />
                        <h4>Italiana</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaJaponesa} alt="Japonesa" />
                        <h4>Japonesa</h4>


                    </div>
                    <div className="feature">
                        <img src={imgComidaMexicana} alt="Mexicana" />
                        <h4>Mexicana</h4>


                    </div>
                </div>
            </div>
        </div>
    );
};



