import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaPaperPlane } from "react-icons/fa";
import "./styles.css";

function Footer() {
	return (
		<footer>
			<div className="footer-content">
				{/* Brand Section */}
				<div className="footer-section brand-section">
					<h1 className="brand-title">NEXORIS</h1>
					<p className="brand-description">
						Pioneering technology solutions to transform businesses and drive digital excellence in an ever-evolving landscape.
					</p>
					<div className="social-icons">
						<button className="social-btn">
							<FaFacebookF />
						</button>
						<button className="social-btn">
							<FaTwitter />
						</button>
						<button className="social-btn">
							<FaLinkedinIn />
						</button>
						<button className="social-btn">
							<FaInstagram />
						</button>
						<button className="social-btn">
							<FaGithub />
						</button>
					</div>
				</div>

				{/* Quick Links Section */}
				<div className="footer-section links-section">
					<h3 className="section-title">Quick Links</h3>
					<ul className="footer-links">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="#products">Products</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#internship">Internship</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>

				{/* Services Section */}
				<div className="footer-section services-section">
					<h3 className="section-title">Our Services</h3>
					<ul className="footer-links">
						<li><a href="#software-dev">Software Development</a></li>
						<li><a href="#data-analytics">Data Analytics & BI</a></li>
						<li><a href="#cloud-services">Cloud Services</a></li>
						<li><a href="#cybersecurity">Cybersecurity</a></li>
						<li><a href="#digital-transformation">Digital Transformation</a></li>
						<li><a href="#iot-solutions">IoT Solutions</a></li>
					</ul>
				</div>

				{/* Newsletter Section */}
				<div className="footer-section newsletter-section">
					<h3 className="section-title">Newsletter</h3>
					<p className="newsletter-description">
						Subscribe to our newsletter to receive updates on the latest technologies, insights, and company news.
					</p>
					<div className="newsletter-form">
						<input
							type="email"
							placeholder="Your email address"
							className="email-input"
						/>
						<button className="submit-btn">
							<FaPaperPlane />
						</button>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="footer-bottom">
				<div className="footer-bottom-content">
					<p className="copyright">© 2025 Nexoris Solutions. All rights reserved.</p>
					<div className="footer-policies">
						<a href="#privacy">Privacy Policy</a>
						<a href="#terms">Terms of Service</a>
						<a href="#cookies">Cookie Policy</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
