"use client"

import { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ParticleBackground } from "@/components/particle-background"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export default function Home() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let ctx = gsap.context(() => {
        // Initialize ScrollSmoother
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
          smoothTouch: 0.3,
        })

        // Initial refresh after a short delay to ensure DOM is ready
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 100)

        return () => {
          smoother?.kill()
        }
      })

      return () => {
        ctx.revert()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return (
    <>
      <ParticleBackground />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <AboutSection />
          <TechnologiesSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  )
}
