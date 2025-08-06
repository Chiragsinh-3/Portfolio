"use client"

import { useEffect, useState } from "react"
import { Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
	{ id: "hero", icon: Home, label: "Home" },
	{ id: "about", icon: User, label: "About" },
	{ id: "technologies", icon: Code, label: "Tech" },
	{ id: "experience", icon: Briefcase, label: "Experience" },
	{ id: "projects", icon: FolderOpen, label: "Projects" },
	{ id: "contact", icon: Mail, label: "Contact" },
]

export function DockNavigation() {
	const [activeSection, setActiveSection] = useState("hero")

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id)
					}
				})
			},
			{
				threshold: 0.5,
			}
		)

		navItems.forEach(({ id }) => {
			const element = document.getElementById(id)
			if (element) observer.observe(element)
		})

		return () => observer.disconnect()
	}, [])

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
			<div className="flex space-x-2 md:flex-col md:space-x-0 md:space-y-2 dock-blur rounded-full p-2">
				{navItems.map(({ id, icon: Icon, label }) => (
					<Button
						key={id}
						onClick={() => scrollToSection(id)}
						size="icon"
						variant={activeSection === id ? "default" : "ghost"}
						className={`relative group transition-all duration-300 hover:scale-110 rounded-full  ${
							activeSection === id
								? "bg-orange_web text-oxford_blue shadow-lg"
								: "text-platinum-500 hover:text-orange_web hover:bg-orange_web/10"
						}`}
						aria-label={label}
					>
						<Icon className="h-4 w-4" />
						<span className="absolute left-full ml-2 px-2 py-1 bg-oxford_blue text-platinum-500 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap md:block hidden border border-orange_web/20">
							{label}
						</span>
					</Button>
				))}
			</div>
		</nav>
	)
}
     

  