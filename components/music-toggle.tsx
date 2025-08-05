"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Create audio element for ambient music
    const audio = new Audio("/ambient-music.mp3") // You would add this file
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio

    return () => {
      audio.pause()
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(console.error)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <Button
      onClick={toggleMusic}
      size="icon"
      variant="ghost"
      className="fixed top-4 right-4 z-40 glass-effect hover:bg-white/10"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  )
}
