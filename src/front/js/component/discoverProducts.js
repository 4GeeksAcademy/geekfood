import React from 'react';
import "../../styles/discoverProducts.css";
import imgComidaAmericana from '../../img/comida_americana.png';
import imgComidaChina from '../../img/comida_china.png';
import imgComidaKoreana from '../../img/comida_koreana.png';
import imgComidaEspañola from '../../img/comida_española.png';
import imgComidaIndia from '../../img/comida_india.png';
import imgComidaItaliana from '../../img/comida_italiana.png';
import imgComidaJaponesa from '../../img/comida_japonesa.png';
import imgComidaMexicana from '../../img/comida_mexicana.png';
import { Link } from 'react-router-dom';

export const DiscoverProducts = () => {
    return (
        <div className="discover-products-container py-5 my-5">
            <div className="discover-products-content">
                <h2>Descubre nuestra amplia variedad de platos</h2>
                <p>
                    En nuestra app de comida rápida, podrás disfrutar de una experiencia única. Realiza pedidos, sigue la ubicación del repartidor y descubre la categoría de productos que tenemos para ti.
                </p>
                <div className="product-features">
                    <div className="feature">
                        <img src={imgComidaAmericana} className="rounded-image" alt="Americana" />
                        <h4>Americana</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaChina} className="rounded-image" alt="China" />
                        <h4>China</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaKoreana} className="rounded-image" alt="Coreana" />
                        <h4>Coreana</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaEspañola} className="rounded-image" alt="Española" />
                        <h4>Española</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaIndia} className="rounded-image" alt="India" />
                        <h4>India</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaItaliana} className="rounded-image" alt="Italiana" />
                        <h4>Italiana</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaJaponesa} className="rounded-image" alt="Japonesa" />
                        <h4>Japonesa</h4>
                    </div>
                    <div className="feature">
                        <img src={imgComidaMexicana} className="rounded-image" alt="Mexicana" />
                        <h4>Mexicana</h4>
                    </div>
                </div>
                <Link to="/product_americano" className="btn btn-secondary w-75">Revisa acá nuestros deliciosos platos</Link>
            </div>
        </div>
    );
};


