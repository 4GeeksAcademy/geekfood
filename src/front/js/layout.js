import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Faq from "./pages/faq";
import Product_americano from "./pages/product_americano";
import ContactUs from "./pages/contactUs";
import UserProfile from "./pages/userProfile";
import injectContext from "./store/appContext";
import DiscoverProducts from "./pages/discoverProducts";
import ViewProducts from "./pages/viewproducts";
import ProductDetail from "./pages/productDetail";
import ResumeBuy from "./pages/resumebuy";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Registro } from "./pages/registro";
import { NotFound } from "./pages/notfound";
import { Category } from "./pages/category";
import { Suscription } from "./pages/suscription";


import { Contact } from "./component/contact";
import { Product } from "./component/product";
import { FPassword } from "./pages/fpassword";


const Layout = () => {
    const basename = process.env.BASENAME || "";
    const [cart, setCart] = useState([]);

    const addToCart = (dish) => {
        const exists = cart.find(item => item.id === dish.id);
        if (exists) {
            setCart(cart.map(item => item.id === dish.id ? { ...item, quantity: item.quantity + dish.quantity } : item));
        } else {
            setCart([...cart, { ...dish, quantity: dish.quantity }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateCart = (id, delta) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item));
    };


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

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
