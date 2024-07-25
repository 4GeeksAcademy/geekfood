import React from 'react';
import "../../styles/discoverProducts.css";

export const DiscoverProducts = () => {
    return (
        <div className="discover-products-container">
            <div className="discover-products-content">
                <h3>Delicioso</h3>
                <h2>Descubre nuestra amplia variedad de productos</h2>
                <p>
                    En nuestra app de comida rápida, podrás disfrutar de una experiencia única. Realiza pedidos, sigue la ubicación del repartidor y descubre la categoría de productos que tenemos para ti.
                </p>
                <div className="product-features">
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Variedad de productos" />
                        <h4>Variedad de productos para todos los gustos</h4>
                        <p>Amplia variedad de productos para satisfacer todos los antojos y gustos.</p>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Facilidad de uso" />
                        <h4>Facilidad de uso para una experiencia sin complicaciones</h4>
                        <p>Interfaz intuitiva y fácil de usar para una experiencia sin complicaciones.</p>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Seguimiento en tiempo real" />
                        <h4>Seguimiento en tiempo real de tu pedido</h4>
                        <p>Sigue en tiempo real la ubicación de tu repartidor y el estado de tu pedido.</p>
                    </div>
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Promociones especiales" />
                        <h4>Descubre nuestras promociones especiales</h4>
                        <p>Servicio de entrega rápido y confiable para que disfrutes de tu comida en minutos.</p>
                    </div>
                </div>
                <div className="discover-buttons">
                    <button className="explore-button">Explorar</button>
                    <button className="register-button">Registrarse</button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverProducts;
