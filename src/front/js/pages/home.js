import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Jumbotron } from "../component/jumbotron";
import { Newsletter } from "../component/newsletter";
import { DownloadApp } from "../component/DownloadApp";
import { DiscoverProducts } from "../component/DiscoverProducts";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotron />
			<DiscoverProducts />
			<DownloadApp />
			<Newsletter />
		</>

	);
};
