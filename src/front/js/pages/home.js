import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Jumbotron } from "../component/jumbotron";
import { Newsletter } from "../component/newsletter";
import { DownloadApp } from "../component/downloadApp";
import { DiscoverProducts } from "../component/discoverProducts";
import { Product } from "../component/product";

import { Contact } from "../component/contact";
import { Comentarios} from "../component/comments";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotron />
			<DiscoverProducts />
			<DownloadApp />
			<Newsletter />
			<Contact />
			<Comentarios />
			<Product />
		</>

	);
};