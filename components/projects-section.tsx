"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "pageplaza",
    title: "PagePlaza - Marketplace for Old Books",
    description:
      "A modern e-commerce web application for buying and selling used books with secure authentication, integrated online payments, and product wishlist functionality.",
    image: "/placeholder.svg?height=300&width=400",
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
    liveUrl: "https://pageplaza.vercel.app",
    githubUrl: "https://github.com/chiragkachhela",
    featured: true,
  },
  {
    id: "brainwave",
    title: "Brainwave - Note Taking Website",
    description:
      "A full-stack note-taking web app enabling users to securely register, log in, and manage notes with tags. Features responsive design, dark mode, and real-time CRUD operations.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://brainwave-notes.vercel.app",
    githubUrl: "https://github.com/chiragkachhela",
    featured: true,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          gsap.from(".project-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          })
        },
      })
      // Hover animations
      const cards = section.querySelectorAll(".project-card")
      cards.forEach((card) => {
        const image = card.querySelector(".project-image")
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          })
          gsap.to(image, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <Card key={project.id} className="project-card glass-effect border-0 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="project-image object-cover transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <Card key={project.id} className="project-card glass-effect border-0 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="project-image object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
