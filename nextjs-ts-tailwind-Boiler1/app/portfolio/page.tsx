import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Application"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder-project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "SaaS"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website for a creative agency with smooth animations and responsive design.",
    image: "/placeholder-project-3.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Website"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and transaction history.",
    image: "/placeholder-project-4.jpg",
    tags: ["React Native", "TypeScript", "Redux", "Biometrics"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization components.",
    image: "/placeholder-project-5.jpg",
    tags: ["React", "D3.js", "Chart.js", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard"
  },
  {
    title: "Learning Management System",
    description: "Complete LMS with course creation, student enrollment, and progress tracking features.",
    image: "/placeholder-project-6.jpg",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Mux"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Education"
  }
]

const categories = ["All", "Web Application", "SaaS", "Website", "Mobile App", "Dashboard", "Education"]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 lg:text-6xl">
          Our Portfolio
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our latest work and see how we've helped businesses transform their digital presence.
        </p>
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Badge 
            key={category} 
            variant={category === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <Card key={index} className="group overflow-hidden">
            <div className="aspect-video bg-muted relative overflow-hidden">
              {/* Placeholder for project image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="secondary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </a>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-muted/50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We'd love to work on your next project. Let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Start Your Project</Button>
          <Button variant="outline" size="lg">View All Projects</Button>
        </div>
      </div>
    </div>
  )
}
