import React from "react";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron";
import { Newsletter } from "../component/newsletter";
import { DownloadApp } from "../component/downloadApp";
import { DiscoverProducts } from "../component/discoverProducts";

import { Contact } from "../component/contact";
import { Comentarios } from "../component/comments";

export const Home = () => {

	return (
		<>
			<Jumbotron />
			<DiscoverProducts />
			<DownloadApp />
			<Newsletter />
			<Contact />
			<Comentarios />
		</>

	);
};