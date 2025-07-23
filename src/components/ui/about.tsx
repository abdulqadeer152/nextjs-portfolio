import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Rocket, Users } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern frameworks and best practices.",
    },
    {
      icon: Brain,
      title: "AI Agent Development",
      description: "Creating intelligent agents using OpenAI SDK and advanced AI technologies.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and user experience.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working effectively in teams and communicating technical concepts clearly.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating innovative solutions at the intersection of{" "}
            <span className="text-yellow-400">web development</span> and{" "}
            <span className="text-yellow-400">artificial intelligence</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With expertise in modern web technologies and AI development, I specialize in creating{" "}
              <span className="text-yellow-400 font-semibold">scalable applications</span> that leverage the power of
              artificial intelligence. My experience spans from frontend development with React and Next.js to backend
              systems and AI agent creation.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm particularly passionate about building{" "}
              <span className="text-yellow-400 font-semibold">AI-powered applications</span> that solve real-world
              problems and enhance user experiences. Whether it's developing responsive web interfaces or creating
              intelligent chatbots, I bring creativity and technical expertise to every project.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest developments in AI and web technologies,
              contributing to open-source projects, and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-black/50 border-yellow-400/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
