"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
      ],
    },
    {
      title: "Backend & AI",
      skills: [
        { name: "Python", level: 85 },
        { name: "OpenAI SDK", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "API Development", level: 82 },
        { name: "AI Agent Building", level: 78 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Database Design", level: 75 },
        { name: "Deployment", level: 80 },
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="text-yellow-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-gray-900/50 border-yellow-400/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm text-yellow-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out relative"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            boxShadow: "0 0 10px rgba(255, 255, 0, 0.5)",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
