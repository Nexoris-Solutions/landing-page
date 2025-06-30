import React from 'react';
import { motion } from 'framer-motion';
import hands from '../../assets/hands.png';
import { BiArrowToTop } from 'react-icons/bi';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { HiCheckBadge } from "react-icons/hi2";

function About() {
	const stats = [
		{ title: 'Happy Clients', count: 4 },
		{ title: 'Projects Completed', count: 4 },
		{ title: 'Team Members', count: 8 },
		{ title: 'Tech Partners', count: 2 },
	];

	return (
		<section id='about' className="max-w-7xl w-full mx-auto h-full flex flex-col items-center justify-center px-4 py-10">
			{/* Top Divider */}
			<hr className="w-full border-t-2 border-black/10 my-6" />

			<div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
				<motion.h2
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-4xl md:text-5xl font-bold font-righteous text-gray-800">
					We Help Businesses Grow Through Tech
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="relative text-md w-full md:w-1/3 bg-blue-500 text-white p-2 rounded-xl flex flex-row justify-between">
					<HiCheckBadge className="text-white text-2xl absolute bottom-1 right-1" />
					<p className="text-md">
						Founded in 2024, Nexoris Solutions is a dynamic new force in digital transformation, bringing fresh perspectives and innovative solutions to help businesses thrive in the digital age.
					</p>
				</motion.div>
			</div>



			{/* Full-width image */}
			<img
				src={hands}
				alt="Shaking hands"
				className="w-full h-auto object-cover rounded-t-xl mb-6 select-none"
			/>

			{/* Lower Section */}
			<div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 md:-translate-y-8">
				{/* Left Text + Stars */}
				<div className="flex-1">
					<p className="text-center md:text-left text-md font-semibold text-black/80 font-poppins mb-3">
						We are a team of passionate Engineers and Designers dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.
					</p>
					<div className="flex flex-row gap-1 text-xl md:text-2xl text-yellow-500 justify-center md:justify-start mb-4">
						{[...Array(4)].map((_, i) => (
							<BsStarFill key={i} />
						))}
						<BsStarHalf />
					</div>
				</div>

				{/* Mission & Stats */}
				<div className="flex-1 text-center md:text-right w-full">
					<p className=" text-md font-semibold text-black/80 font-poppins mb-3">
						Our mission is to transform ideas into reality through cutting-edge technology and creative design.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 justify-end gap-6">
						{stats.map((item, index) => (
							<div key={index} className="flex flex-col items-center md:items-end">
								<p className="text-4xl md:text-5xl font-semibold font-poppins">{item.count}+</p>
								<p className="text-sm text-black/80">{item.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Divider */}
			<hr className="w-full border-t-2 border-black/10 my-6" />
		</section>
	);
}

export default About;
