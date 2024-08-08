import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import "../../styles/discoverProducts.css";
import { Link } from 'react-router-dom';

export const DiscoverProducts = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dtwaqqyie' 
        }
    });

    const images = [
        { name: 'Comida_Americana', alt: 'Americana' },
        { name: 'Comida_China', alt: 'China' },
        { name: 'Comida_Koreana', alt: 'Coreana' },
        { name: 'Comida_Espanola', alt: 'Española' }, 
        { name: 'Comida_India', alt: 'India' },
        { name: 'Comida_Italiana', alt: 'Italiana' },
        { name: 'Comida_Japonesa', alt: 'Japonesa' },
        { name: 'Comida_Mexicana', alt: 'Mexicana' },
    ];

    return (
        <div className="discover-products-container">
            <div className="discover-products-content">
                <h2>Descubre nuestra amplia variedad de platos</h2>
                <p>
                    En nuestra app de comida rápida, podrás disfrutar de una experiencia única. Realiza pedidos, sigue la ubicación del repartidor y descubre la categoría de productos que tenemos para ti.
                </p>
                <div className="product-features">
                    {images.map((image) => {
                        const img = cld
                            .image(`geekfood_galery/${image.name}`)
                            .format('auto')
                            .quality('auto')
                            .resize(auto().gravity(autoGravity()).width(200).height(200)); 

                        return (
                            <div className="feature" key={image.name}>
                                <AdvancedImage cldImg={img} alt={image.alt} />
                                <h5>{image.alt}</h5>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link to="/product_americano" className="btn btn-secondary w-75">Revisa acá nuestros deliciosos platos</Link>
        </div>
    );
};

export default DiscoverProducts;
