import React from "react";
import {
	FaStar,
	FaTrophy,
	FaRocket,
	FaUsers,
	FaGlobe,
	FaLightbulb,
	FaEye,
	FaInfo,
	FaBolt,
	FaBullseye,
	FaCode,
	FaArrowRight,
	FaShieldAlt,
} from "react-icons/fa";
import "./styles.css";

function About() {
	const statsData = [
		{
			icon: <FaTrophy />,
			number: "6+",
			label: "Successful Projects",
			color: "trophy",
		},
		{
			icon: <FaRocket />,
			number: "10+",
			label: "Happy Clients",
			color: "rocket",
		},
		{
			icon: <FaUsers />,
			number: "15+",
			label: "Expert Team Members",
			color: "users",
		},
		{
			icon: <FaGlobe />,
			number: "3+",
			label: "Tech Partners",
			color: "globe",
		},
	];

	const leadershipData = [
		{
			name: "Mr. G. NARENDRAN",
			title: "Founder & CEO",
			description: "Visionary leader with 15+ years of experience in technology and business transformation.",
			skills: ["Strategic Planning", "Business Development", "Technology Innovation"],
			image: "placeholder",
		},
		{
			name: "Harisudhan M",
			title: "Co-founder & CTO",
			description: "Tech innovator with expertise in AI, ML, and enterprise architecture.",
			skills: ["AI/ML", "Cloud Architecture", "Tech Strategy"],
			image: "placeholder",
		},
		{
			name: "Anvin P Shibu",
			title: "Co-founder & COO",
			description: "Operations expert focused on scaling businesses and process optimization.",
			skills: ["Operations", "Process Optimization", "Team Management"],
			image: "placeholder",
		},
		{
			name: "Arunmozhi Varman K",
			title: "Co-founder & Technical Lead",
			description: "Technical architect with deep expertise in enterprise solutions.",
			skills: ["System Architecture", "Enterprise Solutions", "Technical Leadership"],
			image: "placeholder",
		},
	];

	const valuesData = [
		{
			icon: <FaBolt />,
			title: "Innovation First",
			description: "Pushing boundaries with cutting-edge technology solutions.",
			color: "innovation",
		},
		{
			icon: <FaBullseye  />,
			title: "Client Success",
			description: "Dedicated to delivering exceptional value and results.",
			color: "client",
		},
		{
			icon: <FaCode />,
			title: "Technical Excellence",
			description: "Maintaining highest standards in code and architecture.",
			color: "technical",
		},
		{
			icon: <FaShieldAlt />,
			title: "Security First",
			description: "Ensuring robust security in every solution we deliver.",
			color: "security",
		},
	];

	return (
		<section className="about-section">
			{/* Header */}
			<div className="about-header">
				<h1 className="section-title">
					<FaInfo className="info-icon" />
					About Nexoris Solutions
				</h1>
				<p className="section-description">
					Founded in 2024, Nexoris Solutions is a dynamic new force in digital transformation, bringing fresh
					perspectives and innovative solutions to help businesses thrive in the digital age.
				</p>
			</div>

			{/* Stats Section */}
			<div className="stats-section">
				{statsData.map((stat, index) => (
					<div
						key={index}
						className={`stat-card ${stat.color}`}>
						<div className="stat-icon">{stat.icon}</div>
						<div className="stat-content">
							<h3 className="stat-number">{stat.number}</h3>
							<p className="stat-label">{stat.label}</p>
						</div>
					</div>
				))}
			</div>

			{/* Mission & Vision Section */}
			<div className="mission-vision-section">
				<div className="mission-vision-content">
					{/* Mission */}
					<div className="mission-section">
						<div className="section-header">
							<FaLightbulb className="section-icon" />
							<h2>Our Mission</h2>
						</div>
						<p>
							At Nexoris Solutions, we're dedicated to accelerating digital transformation across industries. Our
							mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and
							competitive advantage.
						</p>
					</div>

					{/* Vision */}
					<div className="vision-section">
						<div className="section-header">
							<FaEye className="section-icon" />
							<h2>Our Vision</h2>
						</div>
						<p>
							To be the global leader in delivering transformative technology solutions that shape the future of
							businesses and create lasting positive impact.
						</p>
					</div>
				</div>

				{/* Team Image */}
				<div className="team-image-section">
					<div className="team-image-container">
						<div className="team-image-placeholder">
							<div className="team-text">
								<h3>ENVISION A BETTER FUTURE</h3>
								<p>Our dedicated team working together to bring innovative solutions to life</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Leadership Section */}
			<div className="leadership-section">
				<h2 className="leadership-title">Meet Our Leadership</h2>
				<div className="leadership-grid">
					{leadershipData.map((leader, index) => (
						<div
							key={index}
							className="leader-card">
							<div className="leader-image">
								<div className="image-placeholder"></div>
							</div>
							<div className="leader-info">
								<h3 className="leader-name">{leader.name}</h3>
								<p className="leader-title">{leader.title}</p>
								<p className="leader-description">{leader.description}</p>
								<div className="leader-skills">
									{leader.skills.map((skill, skillIndex) => (
										<span
											key={skillIndex}
											className="skill-tag">
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="supporters-button-container">
					<button className="supporters-btn">
						View Our Supporters
						<FaArrowRight className="arrow-icon" />
					</button>
				</div>
			</div>

			{/* Values Section */}
			<div className="values-section">
				<h2 className="values-title">Our Values</h2>
				<div className="values-grid">
					{valuesData.map((value, index) => (
						<div
							key={index}
							className={`value-card ${value.color}`}>
							<div className="value-icon">{value.icon}</div>
							<h3 className="value-title">{value.title}</h3>
							<p className="value-description">{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
