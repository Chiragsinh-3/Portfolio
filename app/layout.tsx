import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// import { SplashScreen } from "@/components/splash-screen"
// import { CustomCursor } from "@/components/custom-cursor"
// import { MusicToggle } from "@/components/music-toggle"
// import { DockNavigation } from "@/components/dock-navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chirag Kachhela - Full Stack Developer Portfolio",
  description:
    "Full-cycle application development from design through deployment. MERN Stack developer specializing in Next.js, React, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Chirag Kachhela" }],
  creator: "Chirag Kachhela",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chiragkachhela.dev",
    title: "Chirag Kachhela - Full Stack Developer",
    description:
      "Full-cycle application development from design through deployment. MERN Stack developer specializing in Next.js, React, and modern web technologies.",
    siteName: "Chirag Kachhela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Kachhela - Full Stack Developer",
    description:
      "Full-cycle application development from design through deployment. MERN Stack developer specializing in Next.js, React, and modern web technologies.",
    creator: "@chiragkachhela",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* <SplashScreen /> */}
          {/* <CustomCursor /> */}
          {/* <MusicToggle /> */}
          {/* <DockNavigation /> */}
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
