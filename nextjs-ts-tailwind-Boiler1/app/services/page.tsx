import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Palette, Smartphone, Zap, Globe, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"],
    price: "Starting at $2,999"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    price: "Starting at $4,999"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces designed with user experience in mind.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting at $1,999"
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration and inventory management.",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics Dashboard"],
    price: "Starting at $3,999"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications and improve user experience.",
    features: ["Code Optimization", "Database Tuning", "CDN Setup", "Monitoring"],
    price: "Starting at $1,499"
  },
  {
    icon: Shield,
    title: "Security Audit",
    description: "Comprehensive security assessment and implementation of best practices.",
    features: ["Vulnerability Assessment", "Security Implementation", "Code Review", "Compliance"],
    price: "Starting at $999"
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 lg:text-6xl">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive digital solutions to help your business grow and succeed in the modern world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{service.price}</Badge>
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-muted/50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's discuss your requirements and create something amazing together. 
          Contact us for a free consultation and project quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Start a Project</Button>
          <Button variant="outline" size="lg">Schedule Consultation</Button>
        </div>
      </div>
    </div>
  )
}
