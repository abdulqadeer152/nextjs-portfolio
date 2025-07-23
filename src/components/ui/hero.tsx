"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Code, Zap } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 0, 0.1), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/10 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-yellow-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-yellow-400/20 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-4">
                Available for Projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I&apos;m a </span>
              <span className="text-yellow-400 relative">
                Web Developer
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></span>
              </span>
              <br />
              <span className="text-white">& </span>
              <span className="text-yellow-400 relative">
                AI Agent Builder
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I create <span className="text-yellow-400 font-semibold">modern web applications</span> and{" "}
              <span className="text-yellow-400 font-semibold">intelligent AI agents</span> using cutting-edge
              technologies. Passionate about building scalable solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold group">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400 hover:bg-yellow-400/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400 hover:bg-yellow-400/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl group-hover:border-yellow-300 transition-all duration-300">
                <Image
                  src="/images/profile.jpeg"
                  alt="Professional developer portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code className="text-black h-8 w-8" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Zap className="text-yellow-400 h-6 w-6" />
              </div>

              {/* Rotating border */}
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 animate-spin"
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
