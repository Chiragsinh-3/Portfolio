import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TechnologiesAnimation } from "./technologies-animation";
import {
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPython,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
} from "react-icons/si";

const technologies = [
	{
		name: "JavaScript",
		icon: SiJavascript,
		color: "from-orange_web-400 to-orange_web-600",
		description: "Dynamic programming language",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		color: "from-blue-600 to-oxford_blue-800",
		description: "Typed JavaScript superset",
	},
	{
		name: "Next.js",
		icon: SiNextdotjs,
		color: "from-black-600 to-black-500",
		description: "React production framework",
	},
	{
		name: "React",
		icon: SiReact,
		color: "from-oxford_blue-500 to-oxford_blue-700",
		description: "UI component library",
	},
	{
		name: "Node.js",
		icon: SiNodedotjs,
		color: "from-green-600 to-green-800",
		description: "JavaScript runtime environment",
	},
	{
		name: "Express.js",
		icon: SiExpress,
		color: "from-black to-white/50",
		description: "Web application framework",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		color: "from-green-400 to-green-600",
		description: "NoSQL database solution",
	},
	{
		name: "Python",
		icon: SiPython,
		color: "to-green-700 from-blue-500 ",
		description: "Versatile programming language",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
		color: "from-blue-300 to-blue-500",
		description: "Utility-first CSS framework",
	},
	{
		name: "HTML",
		icon: SiHtml5,
		color: "from-red-500 to-red-700",
		description: "Markup language",
	},
	{
		name: "CSS",
		icon: SiCss3,
		color: "from-blue-950 to-oxford_blue-800",
		description: "Styling language",
	},
	{
		name: "JSX/TSX",
		icon: SiReact,
		color: "from-oxford_blue-600 to-oxford_blue-800",
		description: "React syntax extension",
	},
];

export function TechnologiesSection() {
	return (
		<section
			id='technologies'
			className='section-padding bg-oxford_blue-100/50 backdrop-blur-[1px] py-16 sm:py-24'
		>
			<div className='container mx-auto px-4 sm:px-6'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-playfair font-bold mb-4 text-platinum-500'>
						Technologies & Skills
					</h2>
					<div className='w-20 h-1 bg-gradient-to-r from-orange_web-500 to-orange_web-700 mx-auto rounded-full'></div>
					<p className='text-platinum-400 mt-4 max-w-2xl mx-auto'>
						I work with modern technologies to build scalable and performant
						applications
					</p>
				</div>

				<TechnologiesAnimation>
					<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
						{technologies.map((tech) => (
							<Card
								key={tech.name}
								className='tech-card translate-y-[50px] opacity-0 group glass-effect border-orange_web/20 hover:border-orange_web/40 bg-black/10'
							>
								<CardContent className='p-6 text-center relative'>
									<div className='relative z-10'>
										<div
											className={`tech-icon w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center shadow-lg`}
										>
											{React.createElement(tech.icon, {
												className: "w-8 h-8 text-white",
											})}
										</div>

										<div className='tech-content'>
											<h3 className='font-semibold text-platinum-500 mb-2'>
												{tech.name}
											</h3>
											<p className='text-xs text-platinum-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
												{tech.description}
											</p>
										</div>
									</div>

									{/* Decorative corner accent */}
									<div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange_web/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg duration-300'></div>
								</CardContent>
							</Card>
						))}
					</div>
				</TechnologiesAnimation>

				<div className='mt-12 sm:mt-16 text-center'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto'>
						<div className='space-y-2'>
							<div className='text-2xl font-bold text-orange_web'>Frontend</div>
							<div className='text-sm text-platinum-400'>
								React, Next.js, TypeScript
							</div>
						</div>
						<div className='space-y-2'>
							<div className='text-2xl font-bold text-orange_web'>Backend</div>
							<div className='text-sm text-platinum-400'>
								Node.js, Express, MongoDB
							</div>
						</div>
						<div className='space-y-2'>
							<div className='text-2xl font-bold text-orange_web'>Styling</div>
							<div className='text-sm text-platinum-400'>
								Tailwind CSS, CSS
							</div>
						</div>
						<div className='space-y-2'>
							<div className='text-2xl font-bold text-orange_web'>
								Languages
							</div>
							<div className='text-sm text-platinum-400'>
								JavaScript, Python
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
