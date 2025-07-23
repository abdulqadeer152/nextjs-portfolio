import Hero from "@/components/ui/hero"
import About from "@/components/ui/about"
import Skills from "@/components/ui/skills"
import Projects from "@/components/ui/projects"
import Contact from "@/components/ui/contact"
import Navigation from "@/components/ui/navigation"
import AnimatedBackground from "@/components/ui/animated-background"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}