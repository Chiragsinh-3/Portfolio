"use client"

import {  useLayoutEffect, useRef } from "react"
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
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".hero-geometric", {
        scale: 1,
        opacity: 1
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        onEnter: () => {
          gsap.to(".hero-geometric", {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          })
        },
        onLeave: () => {
          gsap.to(".hero-geometric", {
            scale: 0.95,
            opacity: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
          })
        },
        onEnterBack: () => {
          gsap.to(".hero-geometric", {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          })
        },
        onLeaveBack: () => {
          gsap.to(".hero-geometric", {
            scale: 0.95,
            opacity: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
          })
        }
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative">
      <div className="hero-geometric">
        <HeroGeometric badge="MERN Stack Developer" title1="Chirag" title2="Kachhela" />
      </div>
    </section>
  )
}
