import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { useCart } from './component/cart';


// Importa las páginas
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Faq from "./pages/faq";
import Product_americano from "./pages/product_americano";
import ContactUs from "./pages/contactUs";
import UserProfile from "./pages/userProfile";
import DiscoverProducts from "./pages/discoverProducts";
import ViewProducts from "./pages/viewproducts";
import ProductDetail from "./pages/productDetail";
import ResumeBuy from "./pages/resumebuy";
import Checkout from "./pages/checkout";
import Invoice from "./pages/invoice";
import { Login } from "./pages/login";
import { Registro } from "./pages/registro";
import { NotFound } from "./pages/notfound";
import { Category } from "./pages/category";
import { Suscription } from "./pages/suscription";
import { FPassword } from "./pages/fpassword";

// Importa los componentes
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contact } from "./component/contact";
import { Product } from "./component/product";
import { Whyus } from "./component/whyus";
import { DownloadApp } from "./component/downloadApp";
import { Comentarios } from "./component/comments";


import injectContext from "./store/appContext"; 


const Layout = () => {
    const basename = process.env.BASENAME || "";
    const { cart, addToCart, removeFromCart, updateCart } = useCart();

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar cart={cart} />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<FPassword />} path="/resetPassword" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<Product />} path="/product" />
                        <Route element={<ProductDetail addToCart={addToCart} />} path="/productDetail/:dishId" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Faq />} path="/faq" />
                        <Route element={<Product_americano />} path="/product_americano" />
                        <Route element={<ViewProducts />} path="/viewproducts/:restaurantId" />
                        <Route element={<ContactUs />} path="/contactUs" />
                        <Route element={<UserProfile />} path="/userProfile" />
                        <Route element={<NotFound />} path="*" />
                        <Route element={<Suscription />} path="/suscription" />
                        <Route element={<DiscoverProducts />} path="/discoverProduct" />
                        <Route element={<ResumeBuy cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />} path="/resumebuy" />   
                        <Route element={<Checkout cart={cart} />} path="/checkout" />  
                        <Route element={<Invoice />} path="/invoice" />             
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/resetPassword" element={<FPassword />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/productDetail" element={<ProductDetail />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/product_americano" element={<Product_americano />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/whyus" element={<Whyus />} />
                        <Route path="/starRating" element={<Comentarios />} />
                        <Route path="/downloadApp" element={<DownloadApp />} />
                        <Route path="/userProfile" element={<UserProfile />} />
                        <Route path="/suscription" element={<Suscription />} />
                        <Route path="/discoverProduct" element={<DiscoverProducts />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
