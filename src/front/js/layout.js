import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

// Importa las páginas
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Faq from "./pages/faq";
import Product_americano from "./pages/product_americano";
import ContactUs from "./pages/contactUs";
import UserProfile from "./pages/userProfile";
import DiscoverProducts from "./pages/discoverProducts";
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
import { ProductDetail } from "./pages/productDetail";
import { Whyus } from "./component/whyus";
import { DownloadApp } from "./component/downloadApp";
import { Comentarios } from "./component/comments";

// Envuelve tu Layout con el contexto
import injectContext from "./store/appContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    // Manejo de URL de backend
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Navbar />
                <Routes>
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
    );
};

export default injectContext(Layout);
