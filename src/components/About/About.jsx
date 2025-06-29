import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdRocketLaunch } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { BsLightbulbFill } from "react-icons/bs";
import { RiEye2Line } from "react-icons/ri";
import industry from "../../assets/industry.jpg";
import star_top from "../../assets/star_top.webm";
import star_top_idle from "../../assets/star_top-idle.png";
// Stats data
const stats = [
	{ icon: GiLaurelsTrophy, number: 6, label: "Projects" },
	{ icon: MdRocketLaunch, number: 10, label: "Clients" },
	{ icon: HiUserGroup, number: 15, label: "Team Members" },
	{ icon: TbWorld, number: 3, label: "Partners" },
];

// Counter Component
function AnimatedCounter({ from = 0, to = 100, duration = 2 }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
	const count = useMotionValue(from);

	useEffect(() => {
		if (inView) {
			const controls = animate(count, to, {
				duration,
				onUpdate: (v) => {
					if (ref.current) ref.current.textContent = `${Math.floor(v)}+`;
				},
			});
			return () => controls.stop();
		}
	}, [inView, count, to, duration]);

	return <span ref={ref} />;
}

const About = () => {
	const [supportsWebM, setSupportsWebM] = useState(true);

	useEffect(() => {
		const video = document.createElement("video");
		const canPlay = video.canPlayType('video/webm; codecs="vp9"');
		setSupportsWebM(!!canPlay);
	}, []);
	return (
		<section id="about" className="relative w-full min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900 py-20 px-4 sm:px-6 lg:px-16 overflow-hidden text-white">
			{/* Header */}
			<motion.div className="text-center mb-20 max-w-7xl mx-auto">
				<div className="relative flex flex-row items-center justify-center">
					<div className="">
						{supportsWebM ? (
							<video
								src={star_top}
								className="w-16 sm:w-18 md:w-20 object-contain"
								autoPlay
								loop
								muted
								playsInline
								aria-label="Animated top star"
							/>
						) : (
							<img
								src={star_top_idle}
								alt="Star Top"
								className="w-16 sm:w-18 md:w-20 object-contain"
							/>
						)}
					</div>
					<h2 className="text-4xl sm:text-5xl font-extrabold text-white">
						About Nexoris
					</h2>
				</div>
				<div className="h-1 w-32 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto mt-4 mb-6 rounded-full" />
				<p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
					Founded in 2024, Nexoris Solutions powers digital transformation through{" "}
					<span className="text-blue-400 font-semibold">innovation</span> and{" "}
					<span className="text-indigo-400 font-semibold">future-driven thinking</span>.
				</p>
			</motion.div>

			{/* Stats */}
			<div className="max-w-7xl mx-auto mb-24">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((s, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="relative bg-white/5 border border-blue-100/10 backdrop-blur-lg p-6 rounded-3xl text-center shadow-lg hover:shadow-blue-500/30 transition-all"
						>
							<div className="text-5xl mb-4 text-white">{React.createElement(s.icon)}</div>
							<h3 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-200 to-white`}>
								<AnimatedCounter to={s.number} />
							</h3>
							<p className="text-blue-300 font-medium mt-1">{s.label}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center text-white">
				{/* Mission */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8"
				>
					<div className="flex items-center gap-4 mb-4">
						<BsLightbulbFill className="text-white text-3xl bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-xl shadow" />
						<h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
							Our Mission
						</h3>
					</div>
					<p className="text-blue-100 text-lg leading-relaxed">
						To empower businesses with{" "}
						<span className="text-blue-300 font-semibold">tailored digital solutions</span> that drive{" "}
						<span className="text-blue-200 font-semibold">growth</span>,{" "}
						<span className="text-white font-semibold">resilience</span> and{" "}
						<span className="text-indigo-300 font-semibold">innovation</span>.
					</p>
				</motion.div>

				{/* Center Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="relative mx-auto lg:mx-0"
				>
					<div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 blur-2xl rounded-3xl" />
					<img
						src={industry}
						alt="Innovation"
						className="relative w-full h-80 object-cover rounded-3xl border border-white/20 shadow-xl"
					/>
				</motion.div>

				{/* Vision */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8"
				>
					<div className="flex items-center gap-4 mb-4">
						<RiEye2Line className="text-white text-3xl bg-gradient-to-br from-indigo-500 to-blue-500 p-2 rounded-xl shadow" />
						<h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
							Our Vision
						</h3>
					</div>
					<p className="text-blue-100 text-lg leading-relaxed">
						To lead the world in delivering{" "}
						<span className="text-blue-300 font-semibold">intelligent</span>,{" "}
						<span className="text-indigo-200 font-semibold">scalable</span> and{" "}
						<span className="text-white font-semibold">sustainable</span> technology solutions.
					</p>
				</motion.div>
			</div>
		</section >
	);
};

export default About;
