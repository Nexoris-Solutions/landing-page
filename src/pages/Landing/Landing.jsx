import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";

function Landing() {
	return (
		<motion.div
			className="min-h-screen h-full w-screen flex flex-col overflow-clip"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Header />
			<Hero />
			<Services />
			<Footer />
		</motion.div>
	);
}

export default Landing;
