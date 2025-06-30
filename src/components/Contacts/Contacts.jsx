import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { BiMailSend } from "react-icons/bi";

export default function Contacts() {
	const [result, setResult] = useState("");
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error

	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		setResult("");
		const formData = new FormData(e.target);
		formData.append(
			"access_key",
			import.meta.env.VITE_WEB3_FORMS_KEY || "c47f3dbb-116f-4c36-98a6-417b69127cd2"
		);

		try {
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
				throw new Error("Submission failed");
			}
		} catch {
			setStatus("error");
			setResult("Failed to send message. Please try again.");
		}
	};

	const contactNumbers = [
		"+91 7094296432",
		"+91 8111867771",
		"+91 9788818448",
	];

	return (
		<section
			id="contact"
			className="relative max-w-7xl w-full bg-white py-8 mx-auto px-4 lg:px-8"
		>
			<div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
				<motion.h2
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-4xl md:text-5xl font-bold font-righteous text-gray-800">
					Talk Tech With Us
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="relative text-md w-full md:w-1/3 bg-blue-500 text-white p-2 rounded-xl flex flex-row justify-between">
					<HiCheckBadge className="text-white text-2xl absolute bottom-1 right-1" />
					<p className="text-md">
						eady to accelerate your roadmap or explore cutting edge tech? Tell us about your vision—our DevOps, full‑stack, and AI engineers are standing by to make it real.
					</p>
				</motion.div>
			</div>

			<div className="flex flex-col md:flex-row gap-8 items-start w-full mb-8">
				{/* Contact Form - Left */}
				<motion.form
					onSubmit={onSubmit}
					className="w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex flex-col gap-4"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h3 className="text-xl font-bold text-zinc-800 mb-2">Send us a message</h3>
					<input
						id="name"
						name="name"
						type="text"
						required
						placeholder="Your Name"
						className="p-3 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
					<input
						id="email"
						name="email"
						type="email"
						required
						placeholder="you@example.com"
						className="p-3 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
					<input
						id="phone"
						name="phone"
						type="tel"
						placeholder="Phone (optional)"
						className="p-3 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
					<input
						id="subject"
						name="subject"
						type="text"
						required
						placeholder="Subject"
						className="p-3 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
					<textarea
						id="message"
						name="message"
						rows="4"
						required
						placeholder="Your message..."
						className="p-3 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full resize-none"
					/>
					<motion.button
						type="submit"
						disabled={status === "sending"}
						className="group flex items-center justify-center bg-[#0095ff] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
						whileTap={{ scale: 0.97 }}
					>
						<BiMailSend className="text-2xl mr-2" />
						<span>
							{{ idle: "Send Message", sending: "Sending…", sent: "Sent!", error: "Try Again" }[status]}
						</span>
					</motion.button>
					{result && (
						<div className={`mt-2 flex items-center text-sm ${status === "error" ? "text-red-600" : "text-green-600"}`}>
							<HiCheckBadge className="mr-2" />
							<span>{result}</span>
						</div>
					)}
				</motion.form>

				{/* Contact Info & Map - Right */}
				<div className="w-full md:w-1/2 flex flex-col gap-4">
					<div className="bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col gap-2 h-44">
						<h4 className="text-lg font-bold text-zinc-800 mb-1">Contact Info</h4>
						<div className="flex flex-wrap flex-row gap-2">
							<HiCheckBadge className="text-blue-500" />
							{contactNumbers.map((number, idx) => (
								<a
									key={number}
									href={`tel:${number.replace(/\s+/g, "")}`}
									className="flex items-center gap-2 text-zinc-700 hover:text-blue-600 transition"
								>
									<span>{number}, </span>
								</a>
							))}
						</div>
						<div className="flex items-center gap-2 text-zinc-700">
							<HiCheckBadge className="text-blue-500" />
							<span>email: admin@nexoris.in</span>
						</div>
						<div className="flex items-center gap-2 text-zinc-700">
							<HiCheckBadge className="text-blue-500" />
							<span>address: TownHall, Coimbatore, Tamilnadu, India</span>
						</div>
					</div>
					<div className="rounded-xl overflow-hidden border border-gray-200 shadow h-64 md:h-72">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.203417854516!2d76.93951048715823!3d10.997234999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8599f9149e7c7%3A0xbdcffd823bdd9c3b!2sNexoris!5e0!3m2!1sen!2sin!4v1751199176553!5m2!1sen!2sin"
							className="w-full h-full border-0"
							allowFullScreen
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
