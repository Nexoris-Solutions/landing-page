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

	return (
		<section
			id="contact"
			className="relative max-w-7xl w-full bg-white py-8 mx-auto px-4 lg:px-8"
		>
			<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-12 gap-6">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-righteous text-gray-800 flex-1">
					Talk Tech With Us
				</h2>
				<div className="flex-1 bg-blue-500 text-white p-4 md:p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4">
					<HiCheckBadge className="text-white text-6xl flex-shrink-0" />
					<p className="text-sm sm:text-md md:text-base">
						Ready to accelerate your roadmap or explore cutting‑edge tech? Tell us about your vision; our DevOps, full‑stack, and AI engineers are standing by to make it real.
					</p>
				</div>
			</div>

			<motion.form
				onSubmit={onSubmit}
				className="relative backdrop-blur-lg bg-white/70 p-6 md:p-8 border-t-2 border-gray-200 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				{/* Name */}
				<div className="flex flex-col">
					<label htmlFor="name" className="mb-2 text-gray-700 font-medium">
						Your Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						placeholder="Jane Doe"
						className="p-4 border-b-2 bg-zinc-50 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
				</div>

				{/* Email */}
				<div className="flex flex-col">
					<label htmlFor="email" className="mb-2 text-gray-700 font-medium">
						Email Address
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						placeholder="you@example.com"
						className="p-4 border-b-2 bg-zinc-50 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
				</div>

				{/* Phone */}
				<div className="flex flex-col">
					<label htmlFor="phone" className="mb-2 text-gray-700 font-medium">
						Phone (optional)
					</label>
					<input
						id="phone"
						name="phone"
						type="tel"
						placeholder="+1 (555) 123‑4567"
						className="p-4 border-b-2 bg-zinc-50 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
				</div>

				{/* Subject */}
				<div className="flex flex-col">
					<label htmlFor="subject" className="mb-2 text-gray-700 font-medium">
						Subject
					</label>
					<input
						id="subject"
						name="subject"
						type="text"
						required
						placeholder="Project Inquiry"
						className="p-4 border-b-2 bg-zinc-50 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition w-full"
					/>
				</div>

				{/* Message */}
				<div className="md:col-span-2 flex flex-col">
					<label htmlFor="message" className="mb-2 text-gray-700 font-medium">
						Your Message
					</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						required
						placeholder="Tell us more about your project…"
						className="p-4 border-b-2 bg-zinc-50 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition resize-none w-full"
					/>
				</div>

				{/* Submit & Feedback */}
				<div className="md:col-span-2 flex flex-col items-center">
					<motion.button
						type="submit"
						disabled={status === "sending"}
						className="group flex items-center bg-zinc-800 text-white font-semibold p-1 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
						whileTap={{ scale: 0.95 }}
					>
						<div className="group-hover:animate-pulse flex items-center justify-center p-2 bg-blue-500 rounded-full shadow-md transition-all duration-500 ease-in-out">
							<BiMailSend className="text-3xl" />
						</div>
						<p className="text-lg font-medium px-2 w-44">
							{{
								idle: "Send Message",
								sending: "Sending…",
								sent: "Sent!",
								error: "Try Again",
							}[status]}
						</p>
					</motion.button>

					{result && (
						<div className="mt-4 flex items-center text-sm text-gray-800">
							<HiCheckBadge className={`text-${status === "error" ? "red" : "green"}-500 mr-2`} />
							<span>{result}</span>
						</div>
					)}
				</div>
			</motion.form>
		</section>
	);
}
