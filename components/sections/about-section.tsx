"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const section = sectionRef.current
    if (!section) return

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.from(".about-content", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        })
      },
    })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-muted/30 backdrop-blur-[1px]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="about-content">
            <Card className="bg-black-100/10 border-0">
              <CardContent className="p-4 h-full">
                <div className="relative h-96 overflow-hidden rounded-lg border border-white/10">
                  <Image src="/IMG_6373.jpg" alt="Chirag Kachhela" fill className="object-cover " priority={false} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="about-content space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate MERN Stack developer currently pursuing Computer Science Engineering at Sitarambhai
              Naranji Patel Institute of Technology & Research Center. With 6 months of hands-on experience as a MERN
              Stack Intern at Verselix Infotech, I specialize in full-cycle application development from design through
              deployment.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a strong collaborative mindset with clear, effective communication in cross-functional teams. I'm a
              continuous learner with a proactive approach to emerging technologies and industry standards, always
              adhering to clean code principles and modern development best practices.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Months Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
