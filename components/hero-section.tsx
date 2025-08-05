"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroGeometric from "@/components/hero-geometric"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    // Wait for any initial animations to complete
    const delay = 1500
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onLeave: () => {
            gsap.to(".hero-geometric", {
              scale: 0.95,
              opacity: 0.8,
              duration: 1,
              ease: "power2.out",
            })
          },
          onEnterBack: () => {
            gsap.to(".hero-geometric", {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            })
          },
          markers: false,
        })
      }, section)

      return () => ctx.revert()
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative">
      <div className="hero-geometric">
        <HeroGeometric badge="MERN Stack Developer" title1="Chirag" title2="Kachhela" />
      </div>
    </section>
  )
}
