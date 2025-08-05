"use client"

import { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false)

  useLayoutEffect(() => {
    const hasVisited = window.sessionStorage.getItem("hasVisited")
    if (hasVisited) {
      setIsVisible(false)
    }
    setHasCheckedStorage(true)
  }, [])

    useLayoutEffect(() => {
    if (!isVisible) return
    const tl = gsap.timeline({
      onComplete: () => {
        window.sessionStorage.setItem("hasVisited", "true")
      },
    });
    tl.to(".splash-logo", {
      scale: 1.2,
      duration: 0.7,
      ease: "power2.out",
    })
      .to(
        ".splash-text",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.3",
      )
      .to(".splash-screen", {
        opacity: 0,
        duration: 0.6,
        delay: 1,
      });
    return () => {
      tl.kill();
    };
  }, [isVisible]);

  if (!isVisible) return null

  return (
    <div className="splash-screen fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="text-center">
        <div className="splash-logo mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange_web to-oxford_blue rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">CK</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="splash-text opacity-0 translate-y-4">
            <h1 className="text-2xl font-playfair font-bold">Chirag Kachhela</h1>
          </div>
          <div className="splash-text opacity-0 translate-y-4">
            <p className="text-muted-foreground">MERN Stack Developer</p>
          </div>
          <div className="splash-text opacity-0 translate-y-4">
            <div className="w-8 h-1 bg-gradient-to-r from-orange_web to-oxford_blue mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
