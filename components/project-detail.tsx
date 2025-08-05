"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectDetailProps {
  project: {
    title: string
    description: string
    longDescription: string
    technologies: string[]
    images: string[]
    liveUrl: string
    githubUrl: string
    features: string[]
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const section = sectionRef.current
    if (!section) return

    // Initial page load animation
    const tl = gsap.timeline()

    tl.from(".project-header", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".project-image",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".project-content",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3",
      )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main ref={sectionRef} className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="project-header mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="project-header mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {project.images.map((image, index) => (
            <div key={index} className="project-image">
              <Card className="overflow-hidden glass-effect border-0">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Project Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="project-content">
              <h2 className="text-2xl font-playfair font-bold mb-4">About This Project</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {project.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Project Features */}
          <div className="project-content">
            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="project-content text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-playfair font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing digital experiences. Let's discuss your next
            project!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
