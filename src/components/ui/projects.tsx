import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, Globe, Zap } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Chat Assistant",
      description:
        "Built an intelligent chatbot using OpenAI SDK and Next.js that can handle customer inquiries, provide product recommendations, and maintain context across conversations.",
      technologies: ["Next.js", "TypeScript", "OpenAI SDK", "Tailwind CSS"],
      icon: Bot,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Developed a full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      icon: Globe,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      title: "AI Content Generator",
      description:
        "Created a web application that generates marketing content, blog posts, and social media captions using AI. Includes custom prompts, content optimization, and export functionality.",
      technologies: ["Python", "OpenAI SDK", "React", "FastAPI"],
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Built a comprehensive project management tool with real-time collaboration features, drag-and-drop functionality, and team analytics. Optimized for performance and scalability.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSocket"],
      icon: Globe,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      title: "AI Code Assistant",
      description:
        "Developed an intelligent code review and suggestion tool that helps developers write better code, find bugs, and optimize performance using machine learning algorithms.",
      technologies: ["Python", "OpenAI SDK", "React", "TypeScript"],
      icon: Bot,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      title: "Portfolio Website Builder",
      description:
        "Created a drag-and-drop website builder specifically for developers and designers. Features include template customization, responsive design, and one-click deployment.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      icon: Globe,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in <span className="text-yellow-400">web development</span> and{" "}
            <span className="text-yellow-400">AI agent building</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/50 border-yellow-400/20 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className={`h-6 w-6 ${project.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
