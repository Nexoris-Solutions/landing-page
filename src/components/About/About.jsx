import React from 'react'
import Banner from "./components/Banner"
import { BiArrowToTop } from 'react-icons/bi'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { div } from 'framer-motion/client'

function About() {
	const stats = [
		{
			title: "Happy Clients",
			count: 4
		},
		{
			title: "Projects Completed",
			count: 4
		},
		{
			title: "Team Members",
			count: 8
		},
		{
			title: "Tech Partners",
			count: 2
		}];
	
	return (
		<section className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center p-6">
			<hr className="w-full border-t-2 border-black/10 my-6" />
			<div className='w-full flex flex-row justify-between items-center mb-6'>
				<p className='text-md font-semibold w-[550px] invert'>
					Innovative solutions powered by cutting-edge technology to transform businesses and drive digital excellence.
				</p>
				<p className='text-md w-[550px] invert'>
					Founded in 2024, Nexoris Solutions is a dynamic new force in digital transformation, bringing fresh perspectives and innovative solutions to help businesses thrive in the digital age.
					<span className='inline-block font-semibold'><BiArrowToTop /></span>
				</p>
			</div>
			<Banner />
			<div className='w-full flex flex-col items-center justify-center mt-24 pt-20'>
				<div className='w-full flex flex-row items-center justify-between'>
					<div className='relative z-20'>
						<p className='text-md w-72 font-semibold text-black/70 font-poppins pt-8'>
							We are a team of passionate Engineers and Designers dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.
						</p>
						<div className='flex flex-row gap-1 text-2xl mt-2'>
							{[...Array(4)].map((_, i) => (
								<BsStarFill key={i} />
							))}
							<BsStarHalf />
						</div>
					</div>
					<div>
						<p className='text-lg w-[400px] text-right font-semibold'>
							Our mission is to transform ideas into reality through cutting-edge technology and creative design.
						</p>
						<div className='flex flex-row gap-2 mt-4'>
						{ 
							stats.map((item, index) => (
									<div key={index} className='flex flex-col items-center justify-center'>
										<p className='text-5xl font-semibold font-poppins'>{item.count}+</p>
										<p className='text-sm text-black/80'>{item.title}</p>
									</div>
								))
						}
						</div>
					</div>
				</div>
			</div>
			<hr className="w-full border-t-2 border-black/10 my-6" />
		</section>
	)
}

export default About