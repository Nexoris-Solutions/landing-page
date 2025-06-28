import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaStar } from "react-icons/fa";
import "./styles.css";

function Contacts() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	return (
		<section className="contacts-section">
			{/* Header */}
			<div className="contacts-header">
				<button className="connect-btn">
					<FaStar className="star-icon" />
					Let's Connect
				</button>
				<h1 className="section-title">Get in Touch</h1>
				<p className="section-description">
					Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
				</p>
			</div>

			{/* Main Content */}
			<div className="contacts-content">
				{/* Contact Information */}
				<div className="contact-info">
					<div className="contact-card email-card">
						<div className="contact-icon">
							<FaEnvelope />
						</div>
						<div className="contact-details">
							<h3>Email Us</h3>
							<p>sales@nexorissolutions.com</p>
						</div>
					</div>

					<div className="contact-card phone-card">
						<div className="contact-icon">
							<FaPhone />
						</div>
						<div className="contact-details">
							<h3>Call Us</h3>
							<p>+91 422 123 4567</p>
						</div>
					</div>

					<div className="contact-card location-card">
						<div className="contact-icon">
							<FaMapMarkerAlt />
						</div>
						<div className="contact-details">
							<h3>Visit Us</h3>
							<p>Coimbatore, Tamil Nadu, India</p>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="contact-form-container">
					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-row">
							<div className="form-group">
								<label htmlFor="name">Your Name</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Your Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="john@example.com"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="How can we help you?"
								value={formData.subject}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="message">Your Message</label>
							<textarea
								id="message"
								name="message"
								placeholder="Tell us about your project..."
								rows="6"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</div>

						<button type="submit" className="submit-btn">
							<FaPaperPlane className="submit-icon" />
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contacts;
