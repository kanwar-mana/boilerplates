import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Next.js Boilerplate</CardTitle>
            <CardDescription>
              A modern, production-ready boilerplate for building web applications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This boilerplate includes everything you need to get started with a modern 
              Next.js application. It features the latest technologies and best practices 
              to help you build scalable and maintainable applications.
            </p>
            
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Next.js 14 with App Router</li>
              <li>React 18 with Server Components</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>shadcn/ui for beautiful components</li>
              <li>Redux Toolkit for state management</li>
              <li>ESLint and Prettier for code quality</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
