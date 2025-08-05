import React, { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
	id: string
	title: string
	description: string
	image: string
	technologies: string[]
	liveUrl: string
	githubUrl: string
	featured: boolean
}

const projects: Project[] = [
	{
		id: "pageplaza",
		title: "PagePlaza - Marketplace for Old Books",
		description:
			"A modern e-commerce web application for buying and selling used books with secure authentication, integrated online payments, and product wishlist functionality.",
		image: "/pageplaza.png",
		technologies: [
			"Next.js",
			"RTK Query",
			"Google Auth",
			"Razorpay",
			"Node.js",
			"Express",
			"MongoDB",
			"React",
			"TypeScript",
		],
		liveUrl: "http://pageplaza.netlify.app/",
		githubUrl: "https://github.com/Chiragsinh-3/PagePlaza",
		featured: true,
	},
	{
		id: "brainwave",
		title: "Brainwave - Note Taking Website",
		description:
			"A full-stack note-taking web app enabling users to securely register, log in, and manage notes with tags. Features responsive design, dark mode, and real-time CRUD operations.",
		image: "/brainwave.png",
		technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
		liveUrl: "https://brainwave7.netlify.app/notes",
		githubUrl: "https://github.com/Chiragsinh-3/Brainwave-",
		featured: true,
	},
	{
		id: "portfolio",
		title: "Personal Portfolio",
		description:
			"A responsive portfolio website showcasing my projects and skills with modern animations and clean design.",
		image: "/portfolio.png",
		technologies: ["React", "Tailwind CSS", "Framer Motion"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/chiragkachhela",
		featured: false,
	},
]

interface CardProps {
	children: React.ReactNode
	className?: string
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
	<div 
		className={`bg-white/5 dark:bg-gray-900/40 rounded-xl shadow-xl backdrop-blur-sm ${className}`} 
		{...props}
	>
		{children}
	</div>
)

interface CardHeaderProps {
	children: React.ReactNode
	className?: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
	<div className={`p-6 pb-3 ${className}`}>
		{children}
	</div>
)

interface CardTitleProps {
	children: React.ReactNode
	className?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => (
	<h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}>
		{children}
	</h3>
)

interface CardContentProps {
	children: React.ReactNode
	className?: string
}

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
	<div className={`px-6 pb-6 ${className}`}>
		{children}
	</div>
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: "default" | "ghost" | "outline"
	size?: "default" | "lg" | "icon"
	className?: string
}

const Button: React.FC<ButtonProps> = ({ 
	children, 
	variant = "default", 
	size = "default", 
	className = "", 
	...props 
}) => {
	const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
	
	const variants = {
		default: "bg-blue-600 text-white hover:bg-blue-700",
		ghost: "hover:bg-gray-100 dark:hover:bg-gray-700",
		outline: "border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
	}
	
	const sizes = {
		default: "h-10 py-2 px-4",
		lg: "h-11 px-8",
		icon: "h-10 w-10"
	}
	
	return (
		<button 
			className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

interface BadgeProps {
	children: React.ReactNode
	variant?: "default" | "secondary" | "outline"
	className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className = "" }) => {
	const baseClasses = "inline-flex items-center rounded-full text-xs font-medium"
	
	const variants = {
		default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
		secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
		outline: "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
	}
	
	return (
		<span className={`${baseClasses} ${variants[variant]} px-2.5 py-0.5 ${className}`}>
			{children}
		</span>
	)
}

export function ProjectsSection() {
	const sectionRef = useRef<HTMLElement>(null)
	const [hoveredCard, setHoveredCard] = useState<string | null>(null)
	const githubBtnTextRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const cards = entry.target.querySelectorAll('.project-card')
						cards.forEach((card, index) => {
							setTimeout(() => {
								const cardElement = card as HTMLElement
								cardElement.style.opacity = '1'
								cardElement.style.transform = 'translateY(0)'
							}, index * 200)
						})
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])




	const handleCardHover = (cardId: string, isHovering: boolean): void => {
		setHoveredCard(isHovering ? cardId : null)
	}

	const openUrl = (url: string): void => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<section 
			id="projects" 
			ref={sectionRef} 
			className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-gray-100/50 to-white dark:from-white-900/0  dark:to-white-800/0 min-h-screen"
		>
			<div className="container px-4 mx-auto max-w-6xl">
				<div className="text-center mb-24">
					<h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
					<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
						A showcase of my journey through technology, featuring full-stack applications 
						and innovative solutions to real-world problems.
					</p>
				</div>

				{/* Featured Projects */}
				<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
					{projects
						.filter((p) => p.featured)
						.map((project) => (
							<Card
								key={project.id}
								className={`project-card group relative overflow-hidden transition-all duration-700 ease-out hover:shadow-2xl hover:scale-[1.02] ${
									hoveredCard === project.id ? 'shadow-2xl scale-[1.02]' : 'opacity-0 translate-y-12'
								}`}
								style={{
									background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
									border: '1px solid rgba(255,255,255,0.1)',
								}}
							>
								<div className="relative h-64 lg:h-72 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 `}>
										<Button
											size="icon"
											variant="ghost"
											className="bg-black/60 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
											onClick={() => openUrl(project.liveUrl)}
											aria-label="View live demo"
										>
											<ExternalLink className="h-4 w-4" />
										</Button>
										<Button
											size="icon"
											variant="ghost"
											className="bg-black/60 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
											onClick={() => openUrl(project.githubUrl)}
											aria-label="View GitHub repository"
										>
											<Github className="h-4 w-4" />
										</Button>
									</div>
								</div>
								<CardHeader className="space-y-3">
									<CardTitle className="text-2xl lg:text-3xl font-bold tracking-tight hover:text-blue-500 transition-colors duration-300">
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="px-3 py-1.5 text-sm font-medium bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
											>
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
				</div>

				{/* Other Projects */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects
						.filter((p) => !p.featured)
						.map((project) => (
							<Card
								key={project.id}
								className={`project-card border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 ${
									hoveredCard === project.id ? 'shadow-xl scale-105' : 'opacity-0 translate-y-12'
								}`}
								onMouseEnter={() => handleCardHover(project.id, true)}
								onMouseLeave={() => handleCardHover(project.id, false)}
								style={{
									background: 'linear-gradient(135deg, rgb(69, 49, 94) 0%, rgba(13, 94, 13, 0.117) 100%)',
									backdropFilter: 'blur(8px)',
									WebkitBackdropFilter: 'blur(8px)'
								}}
							>
								<div className="relative h-40 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className={`w-full h-full object-cover transition-transform duration-500 ${
											hoveredCard === project.id ? 'scale-110' : 'scale-100'
										}`}
									/>
									<div className={`absolute top-2 right-2 flex gap-1 transition-all duration-300 `}>
										<Button
											size="icon"
											variant="ghost"
											className="h-8 w-8 bg-black/30 backdrop-blur-sm hover:bg-black/30 text-white border border-white/30"
											onClick={() => openUrl(project.liveUrl)}
											aria-label="View live demo"
										>
											<ExternalLink className="h-3 w-3" />
										</Button>
										<Button
											size="icon"
											variant="ghost"
											className="h-8 w-8 bg-black/30 backdrop-blur-sm hover:bg-black/30 text-white border border-white/30"
											onClick={() => openUrl(project.githubUrl)}
											aria-label="View GitHub repository"
										>
											<Github className="h-3 w-3" />
										</Button>
									</div>
								</div>
								<CardHeader className="pb-2">
									<CardTitle className="text-lg cursor-pointer hover:text-blue-600 transition-colors duration-200">
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-2 space-y-3">
									<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-1.5">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="outline"
												className="px-2 py-0.5 text-xs font-medium transition-transform duration-200 hover:scale-105"
											>
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
				</div>

				<div className="text-center mt-20">
					<Button
						variant="outline"
						size="lg"
						className="px-8 py-6 text-lg font-medium transition-all duration-300 ease-out transform hover:scale-[1.02] bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl dark:text-white"
						onClick={() => openUrl("https://github.com/Chiragsinh-3?tab=repositories")}
					>
						<span
							ref={githubBtnTextRef}
							className="mr-3"
						>
							View All Projects
						</span>
						<Github className="h-6 w-6" />
					</Button>
				</div>
			</div>
		</section>
	)
}