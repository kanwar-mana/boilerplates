import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {siteConfig.description}
        </p>
        <div className="space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Next.js 14</CardTitle>
            <CardDescription>
              Built with the latest App Router and Server Components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Experience the power of React Server Components with file-based routing.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>
              Beautiful components built with Radix UI and Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Copy and paste components that you can customize to your needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Redux Toolkit</CardTitle>
            <CardDescription>
              Efficient state management with RTK
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Predictable state container with built-in best practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

