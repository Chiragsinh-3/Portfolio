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
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Design", "Web Development"],
  },
  {
    type: "Experience",
    title: "MERN Stack Intern",
    company: "Verselix Infotech",
    period: "Jan 2025 - Jun 2025",
    description:
      "Gained hands-on experience in full-cycle application development using MERN stack. Worked on real-world projects including e-commerce platforms and note-taking applications with modern authentication and payment integration.",
    skills: ["MERN Stack", "Next.js", "TypeScript", "MongoDB", "Express.js", "React", "Node.js"],
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
    <section id="experience" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-card flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2 px-8">
                  <Card className="glass-effect border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={exp.type === "Education" ? "secondary" : "default"}>{exp.type}</Badge>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
