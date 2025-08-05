"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
	{
		name: "JavaScript",
		icon: "JS",
		color: "from-orange_web-400 to-orange_web-600",
		description: "Dynamic programming language",
	},
	{
		name: "TypeScript",
		icon: "TS",
		color: "from-oxford_blue-600 to-oxford_blue-800",
		description: "Typed JavaScript superset",
	},
	
	{
		name: "Next.js",
		icon: "▲",
		color: "from-black-600 to-black-800",
		description: "React production framework",
	},
	{
		name: "React",
		icon: "⚛️",
		color: "from-oxford_blue-500 to-oxford_blue-700",
		description: "UI component library",
	},
	{
		name: "Node.js",
		icon: "🟢",
		color: "from-orange_web-600 to-orange_web-800",
		description: "JavaScript runtime environment",
	},
	{
		name: "Express.js",
		icon: "E",
		color: "from-black-700 to-black-900",
		description: "Web application framework",
	},
	{
		name: "MongoDB",
		icon: "🍃",
		color: "from-oxford_blue-400 to-oxford_blue-600",
		description: "NoSQL database solution",
	},
	{
		name: "Python",
		icon: "🐍",
		color: "from-orange_web-500 to-orange_web-700",
		description: "Versatile programming language",
	},
	{
		name: "Tailwind CSS",
		icon: "💨",
		color: "from-orange_web-300 to-orange_web-500",
		description: "Utility-first CSS framework",
	},
	{
		name: "HTML",
		icon: "H",
		color: "from-oxford_blue-700 to-oxford_blue-900",
		description: "Markup language",
	},
	{
		name: "CSS",
		icon: "C",
		color: "from-orange_web-500 to-orange_web-700",
		description: "Styling language",
	},
	{
		name: "JSX/TSX",
		icon: "⚛",
		color: "from-oxford_blue-600 to-oxford_blue-800",
		description: "React syntax extension",
	},
]

export function TechnologiesSection() {
	const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
	if (typeof window === "undefined") return
	gsap.registerPlugin(ScrollTrigger)
	const section = sectionRef.current
	if (!section) return
	const ctx = gsap.context(() => {
	  const cards = gsap.utils.toArray(".tech-card") as Element[]
	  gsap.set(cards, { y: 50, opacity: 0 })
	  ScrollTrigger.create({
		trigger: section,
		start: "top 80%",
		once: true,
		onEnter: () => {
		  gsap.to(".tech-card", {
			y: 0,
			opacity: 1,
			duration: 0.8,
			stagger: {
			  each: 0.1,
			  grid: "auto",
			  from: "start",
			},
			ease: "power3.out",
		  })
		},
	  })
	  // Card hover animations
	  cards.forEach((card: Element) => {
		const icon = card.querySelector(".tech-icon")
		const content = card.querySelector(".tech-content")
		const enterAnimation = () => {
		  gsap.to(icon, {
			scale: 1.1,
			rotation: 5,
			duration: 0.2,
			ease: "power2.out",
		  })
		  gsap.to(content, {
			y: -3,
			duration: 0.2,
			ease: "power2.out",
		  })
		}
		const leaveAnimation = () => {
		  gsap.to([card, icon, content], {
			scale: 1,
			y: 0,
			rotation: 0,
			duration: 0.2,
			ease: "power2.out",
		  })
		}
		card.addEventListener("mouseenter", enterAnimation)
		card.addEventListener("mouseleave", leaveAnimation)
		card.addEventListener("touchstart", enterAnimation, { passive: true })
		card.addEventListener("touchend", leaveAnimation, { passive: true })
	  })
	}, section)
	return () => ctx.revert()
  }, [])

	return (
		<section
			id="technologies"
			ref={sectionRef}
			className="section-padding bg-oxford_blue-100/50 backdrop-blur-[1px] py-16 sm:py-24"
		>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-platinum-500">
						Technologies & Skills
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-orange_web-500 to-orange_web-700 mx-auto rounded-full"></div>
					<p className="text-platinum-400 mt-4 max-w-2xl mx-auto">
						I work with modern technologies to build scalable and performant
						applications
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
					{technologies.map((tech) => (
						<Card
							key={tech.name}
							className="group glass-effect border-orange_web/20 hover:border-orange_web/40 bg-black/10"
						>
							<CardContent className="p-6 text-center relative">
								{/* Background gradient effect */}
								{/* <div className="absolute inset-0 bg-gradient-to-br from-orange_web/5 to-oxford_blue/10 opacity-0 group-hover:opacity-20 transition-opacity blur-[20px] duration-300"></div> */}

								<div className="relative z-10">
									<div
										className={`tech-icon w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
									>
										{tech.icon}
									</div>

									<div className="tech-content">
										<h3 className="font-semibold text-platinum-500 mb-2">
											{tech.name}
										</h3>
										<p className="text-xs text-platinum-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											{tech.description}
										</p>
									</div>
								</div>

								{/* Decorative corner accent */}
								<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange_web/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg duration-300"></div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-12 sm:mt-16 text-center">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
						<div className="space-y-2">
							<div className="text-2xl font-bold text-orange_web">Frontend</div>
							<div className="text-sm text-platinum-400">
								React, Next.js, TypeScript
							</div>
						</div>
						<div className="space-y-2">
							<div className="text-2xl font-bold text-orange_web">Backend</div>
							<div className="text-sm text-platinum-400">
								Node.js, Express, MongoDB
							</div>
						</div>
						<div className="space-y-2">
							<div className="text-2xl font-bold text-orange_web">Styling</div>
							<div className="text-sm text-platinum-400">
								Tailwind CSS, CSS
							</div>
						</div>
						<div className="space-y-2">
							<div className="text-2xl font-bold text-orange_web">Languages</div>
							<div className="text-sm text-platinum-400">
								JavaScript, Python
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
