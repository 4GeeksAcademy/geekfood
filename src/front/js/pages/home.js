import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Jumbotron } from "../component/jumbotron";
import { Contact } from "../component/contact";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotron />
			<Contact />
		</>
	);
};
