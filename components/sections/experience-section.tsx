"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
	{
		type: "Education",
		title: "Bachelor of Engineering (B.E.) Computer Science",
		company: "Sitarambhai Naranji Patel Institute of Technology & Research Center",
		period: "2022 - Present",
		description:
			"Currently pursuing Computer Science Engineering with focus on full-stack development, data structures, algorithms, and modern web technologies.",
		skills: [
			"Data Structures",
			"Algorithms",
			"Software Engineering",
			"Database Design",
			"Web Development",
		],
	},
	{
		type: "Experience",
		title: "MERN Stack Intern",
		company: "Verselix Infotech",
		period: "Jan 2025 - Jun 2025",
		description:
			"Gained hands-on experience in full-cycle application development using MERN stack. Worked on real-world projects including e-commerce platforms and note-taking applications with modern authentication and payment integration.",
		skills: [
			"MERN Stack",
			"Next.js",
			"TypeScript",
			"MongoDB",
			"Express.js",
			"React",
			"Node.js",
		],
	},
]

export function ExperienceSection() {
	const sectionRef = useRef<HTMLElement>(null)
	const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
	if (typeof window === "undefined") return
	gsap.registerPlugin(ScrollTrigger)
	const section = sectionRef.current
	const timeline = timelineRef.current
	if (!section || !timeline) return
	const ctx = gsap.context(() => {
	  ScrollTrigger.create({
		trigger: section,
		start: "top 80%",
		onEnter: () => {
		  gsap.from(".experience-card:first-child", {
			x: -50,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		  })
		  gsap.from(".timeline-line", {
			scaleY: 0,
			duration: 1,
			delay: 0.4,
			ease: "power3.out",
			transformOrigin: "top",
		  })
		  gsap.from(".experience-card:not(:first-child)", {
			x: 50,
			opacity: 0,
			duration: 0.8,
			delay: 0.8,
			stagger: 0.2,
			ease: "power3.out",
		  })
		},
	  })
	}, section)
	return () => ctx.revert()
  }, [])

	return (
		<section
			id="experience"
			ref={sectionRef}
			className="section-padding bg-black/50 py-20"
		>
			<div className="container px-4 mx-auto">
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl pb-2 font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
						Experience
					</h2>
					<div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>	
				</div>

				<div className="relative max-w-5xl mx-auto">
					{/* Timeline Line - Hide on mobile */}
					<div
						ref={timelineRef}
						className="timeline-line hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 to-purple-600/50 rounded-full"
					></div>

					<div className="space-y-8 md:space-y-16">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`experience-card flex flex-col md:flex-row items-center ${
									index % 2 === 0
										? "md:flex-row"
										: "md:flex-row-reverse"
								}`}
							>
								<div className="w-full md:w-1/2 px-4 md:px-10 mb-8 md:mb-0">
									<Card className="glass-effect border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
										<CardHeader className="space-y-3">
											<div className="flex flex-wrap items-center justify-between gap-2">
												<Badge
													variant={
														exp.type === "Education"
															? "secondary"
															: "default"
													}
													className="px-3 py-1 text-sm font-medium"
												>
													{exp.type}
												</Badge>
												<span className="text-sm font-medium text-muted-foreground">
													{exp.period}
												</span>
											</div>
											<CardTitle className="text-2xl font-semibold leading-7 text-white">
												{exp.title}
											</CardTitle>
											<p className="text-md font-medium text-blue-500 dark:text-blue-400">
												{exp.company}
											</p>
										</CardHeader>
										<CardContent className="space-y-4">
											<p className="text-base leading-relaxed text-muted-foreground">
												{exp.description}
											</p>
											<div className="flex flex-wrap gap-2">
												{exp.skills.map((skill) => (
													<Badge
														key={skill}
														variant="outline"
														className="px-2.5 py-0.5 text-xs font-medium bg-background/50"
													>
														{skill}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Timeline Dot - Hide on mobile */}
								<div className="hidden md:block w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

								<div className="w-full md:w-1/2"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
