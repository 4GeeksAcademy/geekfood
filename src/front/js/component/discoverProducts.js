import React from 'react';
import "../../styles/discoverProducts.css";

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
                        <img src="https://via.placeholder.com/150" alt="Americana" />
                        <h4>Americana</h4>
                        <p>Amplia variedad de comida Americana para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button" href="/product.js">Explorar</button>

                    </div>

                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="China" />
                        <h4>China</h4>
                        <p>Amplia variedad de comida China para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Coreana" />
                        <h4>Coreana</h4>
                        <p>Amplia variedad de comida Coreana para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Española" />
                        <h4>Española</h4>
                        <p>Amplia variedad de comida Española para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="India" />
                        <h4>India</h4>
                        <p>Amplia variedad de comida India para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Italiana" />
                        <h4>Italiana</h4>
                        <p>Amplia variedad de comida Italiana para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Japonesa" />
                        <h4>Japonesa</h4>
                        <p>Amplia variedad de comida Japonesa para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Mexicana" />
                        <h4>Mexicana</h4>
                        <p>Amplia variedad de comida Mexicana para satisfacer todos los antojos y gustos</p>
                        <button className="explore-button">Explorar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


