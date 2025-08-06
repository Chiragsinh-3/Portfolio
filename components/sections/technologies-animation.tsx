"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function TechnologiesAnimation({ children }: { children: React.ReactNode }) {
    const sectionRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (typeof window === "undefined") return
        gsap.registerPlugin(ScrollTrigger)
        const section = sectionRef.current
        if (!section) return

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".tech-card") as Element[]
            ScrollTrigger.create({
                trigger: section,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    gsap.to(".tech-card", {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: {
                            each: 0.1,
                            grid: "auto",
                            from: "start",
                        },
                        ease: "power3.out",
                    })
                },
            })

            cards.forEach((card: Element) => {
                const icon = card.querySelector(".tech-icon")
                const content = card.querySelector(".tech-content")
                
                const enterAnimation = () => {
                    gsap.to(icon, {
                        scale: 1.1,
                        rotation: 5,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                    gsap.to(content, {
                        y: -3,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                }

                const leaveAnimation = () => {
                    gsap.to([icon, content], {
                        scale: 1,
                        y: 0,
                        rotation: 0,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                }

                card.addEventListener("mouseenter", enterAnimation)
                card.addEventListener("mouseleave", leaveAnimation)
                card.addEventListener("touchstart", enterAnimation, { passive: true })
                card.addEventListener("touchend", leaveAnimation, { passive: true })
            })
        }, section)

        return () => ctx.revert()
    }, [])

    return <div ref={sectionRef}>{children}</div>
}
