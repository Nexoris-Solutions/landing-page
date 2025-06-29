import React, { useState, useEffect } from "react";
import {
	FaPaperPlane,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import flower from "../../assets/flower.webm";
import flower_idle from "../../assets/flower-idle.png";
import star_top from "../../assets/star_top.webm";
import star_top_idle from "../../assets/star_top-idle.png";

export default function Contacts() {
	const [result, setResult] = useState("");
	const [supportsWebM, setSupportsWebM] = useState(true);
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error

	useEffect(() => {
		const v = document.createElement("video");
		setSupportsWebM(!!v.canPlayType('video/webm; codecs="vp9"'));
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		setResult("");
		const formData = new FormData(e.target);
		formData.append(
			"access_key",
			import.meta.env.VITE_WEB3_FORMS_KEY || "c47f3dbb-116f-4c36-98a6-417b69127cd2"
		);
		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});
		const data = await res.json();

		if (data.success) {
			setStatus("sent");
			setResult("Message sent successfully!");
			e.target.reset();
		} else {
			setStatus("error");
			setResult("Failed to send message.");
		}
	};

	const handleReset = () => {
		setStatus("idle");
		setResult("");
	};

	return (
		<section id="contacts" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-4 py-10 overflow-hidden">
			{/* Background Video */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
				{supportsWebM ? (
					<video
						src={flower}
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover opacity-20"
					/>
				) : (
					<img
						src={flower_idle}
						alt="Decor"
						className="w-full h-full object-cover opacity-20"
					/>
				)}
			</div>

			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="relative z-10 text-center mb-12"
			>
				<div className="inline-flex items-center space-x-3">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="text-3xl font-unbound sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
						style={{ backgroundSize: "200% 200%" }}
					>
						Get in Touch
					</motion.h2>
					{supportsWebM ? (
						<video
							src={star_top}
							autoPlay
							loop
							muted
							playsInline
							className="w-16 sm:w-18 md:w-20 object-contain"
						/>
					) : (
						<img
							src={star_top_idle}
							alt="Star"
							className="w-16 sm:w-18 md:w-20 object-contain"
						/>
					)}
				</div>
				<motion.div
					className="h-1 w-28 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full my-4 mx-auto"
					initial={{ width: 0 }}
					animate={{ width: 112 }}
					transition={{ duration: 1 }}
				/>
				<p className="text-lg text-gray-700 max-w-xl mx-auto">
					We’re here to help with anything you need. Send us a message!
				</p>
			</motion.div>

			{/* Main Grid */}
			<div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Form Card */}
				<div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-lg p-8 hover:bg-white/25 transition">
					<form onSubmit={onSubmit} className="space-y-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{[
								{ name: 'name', type: 'text', placeholder: 'John Doe', label: 'Name' },
								{ name: 'email', type: 'email', placeholder: 'you@example.com', label: 'Email' },
							].map((field) => (
								<div key={field.name}>
									<label className="block text-sm text-blue-900 mb-1">
										{field.label}
									</label>
									<input
										name={field.name}
										type={field.type}
										required
										placeholder={field.placeholder}
										className="w-full px-4 py-2 bg-white/40 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black placeholder-gray-600"
									/>
								</div>
							))}
						</div>
						{[
							{ name: 'phone', type: 'tel', placeholder: '+1 234 567 8900', label: 'Phone' },
							{ name: 'subject', type: 'text', placeholder: 'Subject', label: 'Subject' },
						].map((field) => (
							<div key={field.name}>
								<label className="block text-sm text-blue-900 mb-1">
									{field.label}
								</label>
								<input
									name={field.name}
									type={field.type}
									placeholder={field.placeholder}
									className="w-full px-4 py-2 bg-white/40 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black placeholder-gray-600"
								/>
							</div>
						))}
						<div>
							<label className="block text-sm text-blue-900 mb-1">Message</label>
							<textarea
								name="message"
								rows="4"
								required
								placeholder="Your message..."
								className="w-full px-4 py-2 bg-white/40 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black placeholder-gray-600"
							/>
						</div>
						<button
							type="submit"
							disabled={status === 'sending'}
							className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition flex items-center justify-center space-x-2"
						>
							{status === 'idle' ? <FaPaperPlane /> : null}
							<span>
								{status === 'idle' && 'Send Message'}
								{status === 'sending' && 'Sending...'}
								{status === 'sent' && 'Sent!'}
								{status === 'error' && 'Try Again'}
							</span>
						</button>
						{result && (
							<p className={`text-center mt-2 ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
								{result}
							</p>
						)}
					</form>
				</div>

				{/* Contact Info Card */}
				<div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-lg p-8 space-y-6 hover:bg-white/25 transition">
					<h3 className="text-2xl font-semibold text-indigo-800">Contact Info</h3>
					{[
						{ icon: <FaPhone />, label: 'Phone', value: '+91 7094296432' },
						{ icon: <FaEnvelope />, label: 'Email', value: 'admin@nexoris.in' },
						{ icon: <FaMapMarkerAlt />, label: 'Address', value: 'Coimbatore, Tamil Nadu, India' },
					].map((item, i) => (
						<div key={i} className="flex items-start space-x-4">
							<div className="text-indigo-600 mt-1">{item.icon}</div>
							<div>
								<p className="text-sm font-medium text-blue-900">{item.label}</p>
								<p className="text-black text-sm">{item.value}</p>
							</div>
						</div>
					))}
					<div className="w-full h-64 rounded-xl overflow-hidden mt-4 border border-white/40">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.203417854516!2d76.93951048715823!3d10.997234999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8599f9149e7c7%3A0xbdcffd823bdd9c3b!2sNexoris!5e0!3m2!1sen!2sin!4v1751199176553!5m2!1sen!2sin"
							className="w-full h-full"
							allowFullScreen
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
