import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Contacts from "../../components/Contacts/Contacts";
import About from "../../components/About/About";
import Members from "../../components/Members/Members";
import Careers from "../../components/Careers/Careers";

function Landing() {
	return (
		<motion.div
			className="min-h-screen h-full w-screen flex flex-col overflow-clip"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<Header />
			<Hero />
			<About />
			<Services />
			<Members />
			<Careers />
			<Contacts />
			<Footer />
		</motion.div>
	);
}

export default Landing;
