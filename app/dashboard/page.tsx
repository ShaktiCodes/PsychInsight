"use client"

import { useState } from "react"
import { Brain, BarChart3, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { FileUploader } from "@/components/file-uploader"
import { PersonalityChart } from "@/components/personality-chart"
import { EmotionTimeline } from "@/components/emotion-timeline"
import { CommunicationStats } from "@/components/communication-stats"

export default function DashboardPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasData, setHasData] = useState(false)

  const handleFileUpload = () => {
    setIsAnalyzing(true)
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false)
      setHasData(true)
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Psychological Profile Dashboard</h1>
            <Button disabled={isAnalyzing}>Export Report</Button>
          </div>

          {!hasData ? (
            <div className="flex flex-col items-center justify-center h-[70vh] space-y-8">
              <div className="flex flex-col items-center space-y-4 text-center max-w-lg">
                <div className="bg-primary-50 p-4 rounded-full">
                  <Brain className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Upload Chat Data to Begin Analysis</h2>
                <p className="text-gray-600 max-w-md">
                  Upload chat logs from WhatsApp, Discord, or Slack to generate psychological insights. Your data is
                  processed securely and never stored without your consent.
                </p>
              </div>
              <FileUploader onUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
              {isAnalyzing && (
                <div className="w-full max-w-md space-y-2">
                  <p className="text-sm text-center font-medium">Analyzing communication patterns...</p>
                  <Progress value={45} className="h-2 bg-primary-100" />
                </div>
              )}
            </div>
          ) : (
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="personality">Personality</TabsTrigger>
                <TabsTrigger value="emotions">Emotional Analysis</TabsTrigger>
                <TabsTrigger value="communication">Communication</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Dominant Traits</CardTitle>
                      <User className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Openness & Conscientiousness</div>
                      <p className="text-xs text-gray-500">Based on Big Five personality model</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Emotional Tone</CardTitle>
                      <BarChart3 className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Mostly Positive</div>
                      <p className="text-xs text-gray-500">72% positive sentiment</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Communication Style</CardTitle>
                      <MessageSquare className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Analytical & Direct</div>
                      <p className="text-xs text-gray-500">Based on 1,248 messages</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Personality Profile</CardTitle>
                      <CardDescription>Based on the Big Five model</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <PersonalityChart />
                    </CardContent>
                  </Card>
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Emotional Trends</CardTitle>
                      <CardDescription>Last 30 days</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <EmotionTimeline />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="personality" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Personality Analysis</CardTitle>
                    <CardDescription>Based on communication patterns and language use</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Openness</h3>
                          <span className="text-sm">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <p className="text-sm text-gray-500">
                          High openness indicates curiosity, creativity, and openness to new experiences.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Conscientiousness</h3>
                          <span className="text-sm">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                        <p className="text-sm text-gray-500">
                          High conscientiousness indicates organization, reliability, and goal-oriented behavior.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Extraversion</h3>
                          <span className="text-sm">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                        <p className="text-sm text-gray-500">
                          Moderate extraversion indicates a balance between social engagement and solitary activities.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Agreeableness</h3>
                          <span className="text-sm">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                        <p className="text-sm text-gray-500">
                          Moderate-high agreeableness indicates cooperation, empathy, and consideration for others.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Neuroticism</h3>
                          <span className="text-sm">30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                        <p className="text-sm text-gray-500">
                          Low neuroticism indicates emotional stability and resilience to stress.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="emotions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Emotional Analysis</CardTitle>
                    <CardDescription>Sentiment and emotional patterns over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96">
                      <EmotionTimeline detailed />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="communication" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Communication Patterns</CardTitle>
                    <CardDescription>Analysis of messaging habits and styles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96">
                      <CommunicationStats />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </main>
      </div>
    </div>
  )
}

