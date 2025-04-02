import Link from "next/link"
import { ArrowRight, BarChart3, MessageSquare, Shield, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-primary" />
            <span>PsychInsight</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-4">
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                  <span className="font-medium">New AI-Powered Analysis</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none">
                    Understand Communication Patterns with AI
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Gain insights into communication styles, emotional patterns, and personality traits through ethical
                    AI analysis.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1.5 bg-primary hover:bg-primary-600">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#privacy">
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-1.5 border-primary/30 text-primary hover:bg-primary-50"
                    >
                      Learn About Privacy
                      <Shield className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Dashboard Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides comprehensive insights while maintaining the highest privacy standards
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Communication Analysis</CardTitle>
                  <CardDescription>Analyze communication patterns across different platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Process chat logs from WhatsApp, Discord, Slack, and more to identify patterns and trends.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Personality Insights</CardTitle>
                  <CardDescription>Based on the Big Five Personality Model</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Gain insights into personality traits like openness, conscientiousness, extraversion, agreeableness,
                    and neuroticism.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Emotional Analysis</CardTitle>
                  <CardDescription>Track emotional patterns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Visualize emotional trends and identify potential stress patterns through sentiment analysis.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="privacy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy First</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We prioritize your privacy and data security at every step
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
                <Card>
                  <CardHeader>
                    <Shield className="h-6 w-6 mb-2 text-primary" />
                    <CardTitle>Secure Data Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      All data is processed securely with end-to-end encryption. Your chat logs never leave your secure
                      environment without explicit consent.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="h-6 w-6 mb-2 text-primary" />
                    <CardTitle>Consent-Based Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We only analyze data with explicit consent, and you can revoke access at any time. You remain in
                      control of your data.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 PsychInsight. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

