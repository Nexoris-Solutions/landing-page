import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Contacts from "../../components/Contacts/Contacts";
function Landing() {
	return (
		<div className="min-h-screen h-full w-screen flex flex-col">
			<Header />
			<Hero />
			<Contacts />
			<Footer />
		</div>
	);
}

export default Landing;
