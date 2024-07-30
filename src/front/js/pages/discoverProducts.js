import React, { useState } from 'react';
import "../../styles/product.css";
import imgComidaAmericana from '../../img/comida_americana.png';
import imgComidaChina from '../../img/comida_china.png';
import imgComidaKoreana from '../../img/comida_koreana.png';
import imgComidaEspañola from '../../img/comida_española.png';
import imgComidaIndia from '../../img/comida_india.png';
import imgComidaItaliana from '../../img/comida_italiana.png';
import imgComidaJaponesa from '../../img/comida_japonesa.png';
import imgComidaMexicana from '../../img/comida_mexicana.png';

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

export default DiscoverProducts;

