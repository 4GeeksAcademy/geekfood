import React, { useState } from "react";

export const ProductDetail = () => {
    const images = [
        { name: 'Image 1', src: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/spagh_e8DiuI5qVF4d3xokhn0EQAtHJYXSU6-1024x683.png.webp', alt: 'Image 1' },
        { name: 'Image 2', src: 'https://www.cocinatis.com/archivos/202307/espaguetis-tomate-recetas-pasta-italiana-1280x720x80xX.jpg', alt: 'Image 2' },
        { name: 'Image 3', src: 'https://estaticos-cdn.prensaiberica.es/clip/76242d1d-9982-43dd-8eff-d1a2df067027_alta-libre-aspect-ratio_default_0.jpg', alt: 'Image 3' },
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [activeTab, setActiveTab] = useState('tab1');

    const renderContent = () => {
        switch (activeTab) {
            case 'tab1': /* detalle */
                return <p className="mt-4">Exquisito platillo italiano donde podrás deleitar una variedad de sabores en tu paladar.</p>;
            case 'tab2': /* caracteristicas */
                return <p className="mt-4">Este platillo se entrega gratinado con queso mozzarella, pan con mantequilla de ajo y servicios.</p>;
            case 'tab3': /* ingredientes */
                return <ul className="mt-4">
                    <li>Lechuga</li>
                    <li>Tomate</li>
                    <li>Papa</li>
                </ul>;
            default:
                return null;
        }
    };

    return (
        <div className="container m-5">
            <div className="row">

                <div className="section1 col-md-5">
                    <h1>Pasta en salsa Bolognesa</h1>
                    <h3>$ 55</h3>
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('tab1')}
                            >
                                Detalle
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('tab2')}
                            >
                                Caracteristicas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('tab3')}
                            >
                                Ingredientes
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        {renderContent()}
                    </div>
                    <div>
                        <select className="form-select mt-4" aria-label="Default select example">
                            <option selected>Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="d-flex mt-4">
                        <div>
                            <button className="btn btn-secondary ms-1">Agregar al carrito</button>
                        </div>
                        <div>
                            <button className="btn btn-secondary ms-1">Comprar ahora</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 fs-10">
                        <p><strong>Envío gratis sobre $50.000</strong></p>
                    </div>
                </div>
                <div className="section2 col-md-1">
                </div>
                <div className="section3 col-md-6">
                    <div className="d-flex">
                        <div className="selected-image" style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                            <img src={selectedImage.src} alt={selectedImage.alt} className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div className="thumbnails" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '10px' }}>
                            {images.map((image, index) => (
                                <div className="thumbnail" key={index} onClick={() => setSelectedImage(image)}>
                                    <img src={image.src} alt={image.alt} className="w-100 h-auto d-block" style={{ cursor: 'pointer', maxWidth: '80px' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
