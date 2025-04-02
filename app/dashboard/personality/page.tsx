"use client"

import { useState } from "react"
import { Brain, User, BarChart3, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { PersonalityChart } from "@/components/personality-chart"

export default function PersonalityPage() {
  const [selectedView, setSelectedView] = useState<string>("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Personality Analysis</h1>
              <p className="text-gray-600">Based on the Big Five personality model</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 border-none shadow-md">
              <CardHeader className="bg-primary-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-primary-800">
                  <User className="h-5 w-5" />
                  Personality Profile
                </CardTitle>
                <CardDescription>Your personality traits based on communication patterns</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="overview" onValueChange={setSelectedView}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
                    <TabsTrigger value="trends">Trends Over Time</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                    <div className="h-80">
                      <PersonalityChart />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                      {[
                        { name: "Openness", value: 78, description: "Curious and open to new experiences" },
                        { name: "Conscientiousness", value: 82, description: "Organized and goal-oriented" },
                        { name: "Extraversion", value: 45, description: "Balanced social engagement" },
                        { name: "Agreeableness", value: 65, description: "Cooperative and considerate" },
                        { name: "Neuroticism", value: 30, description: "Emotionally stable" },
                      ].map((trait) => (
                        <Card key={trait.name} className="bg-gray-50">
                          <CardContent className="p-4">
                            <h3 className="font-medium text-sm">{trait.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Progress value={trait.value} className="h-2" />
                              <span className="text-xs font-medium">{trait.value}%</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">{trait.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="detailed">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Openness</h3>
                          <span className="text-sm">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <p className="text-sm text-gray-600">
                          Your high openness score indicates curiosity, creativity, and openness to new experiences. You
                          likely enjoy exploring new ideas, have a rich imagination, and appreciate art and beauty. You
                          tend to be more aware of your feelings and may be more willing to try new things than others.
                        </p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-primary-50 rounded p-2">
                            <h4 className="text-xs font-medium text-primary-800">Strengths</h4>
                            <ul className="text-xs text-gray-700 mt-1 list-disc list-inside">
                              <li>Creative thinking</li>
                              <li>Intellectual curiosity</li>
                              <li>Appreciation for aesthetics</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <h4 className="text-xs font-medium">Communication Style</h4>
                            <p className="text-xs text-gray-700 mt-1">
                              You use varied vocabulary and express abstract concepts easily.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Separator />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Conscientiousness</h3>
                          <span className="text-sm">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                        <p className="text-sm text-gray-600">
                          Your high conscientiousness score indicates organization, reliability, and goal-oriented
                          behavior. You likely plan ahead, pay attention to details, and follow through on commitments.
                          You tend to be self-disciplined and thoughtful about your actions.
                        </p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-primary-50 rounded p-2">
                            <h4 className="text-xs font-medium text-primary-800">Strengths</h4>
                            <ul className="text-xs text-gray-700 mt-1 list-disc list-inside">
                              <li>Organizational skills</li>
                              <li>Reliability</li>
                              <li>Attention to detail</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <h4 className="text-xs font-medium">Communication Style</h4>
                            <p className="text-xs text-gray-700 mt-1">
                              Your messages are structured, clear, and often include specific details.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Separator />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Extraversion</h3>
                          <span className="text-sm">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                        <p className="text-sm text-gray-600">
                          Your moderate extraversion score indicates a balance between social engagement and solitary
                          activities. You can enjoy social interactions but also value your alone time. You're neither
                          overly talkative nor extremely reserved.
                        </p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-primary-50 rounded p-2">
                            <h4 className="text-xs font-medium text-primary-800">Strengths</h4>
                            <ul className="text-xs text-gray-700 mt-1 list-disc list-inside">
                              <li>Adaptability to different social contexts</li>
                              <li>Balance between listening and speaking</li>
                              <li>Comfortable in small groups</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <h4 className="text-xs font-medium">Communication Style</h4>
                            <p className="text-xs text-gray-700 mt-1">
                              You communicate thoughtfully and respond well to both group and one-on-one conversations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="trends">
                    <div className="flex items-center justify-center h-80 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-lg font-medium text-gray-700">Trend Analysis</h3>
                        <p className="text-sm text-gray-500 max-w-md">
                          Personality trend analysis requires at least 3 months of data. Continue using the platform to
                          unlock this feature.
                        </p>
                        <Button variant="outline" className="mt-4">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="md:col-span-1">
              <Card className="h-full border-none shadow-md">
                <CardHeader className="bg-primary-50 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-primary-800">
                    <Brain className="h-5 w-5" />
                    Personality Insights
                  </CardTitle>
                  <CardDescription>What your traits mean for you</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h3 className="font-medium text-primary-800 mb-2">Your Dominant Traits</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <p className="text-sm font-medium">Conscientiousness (82%)</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <p className="text-sm font-medium">Openness (78%)</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">
                        This combination suggests you're both organized and creative - a powerful mix for
                        problem-solving and innovation.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Communication Style</h3>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-sm">
                          <span className="font-medium">Primary:</span> Analytical
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm">
                          <span className="font-medium">Secondary:</span> Direct
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        You tend to communicate in a logical, structured way while being straightforward and to the
                        point.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Potential Growth Areas</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <BarChart3 className="h-4 w-4 text-primary mt-0.5" />
                          <span>Consider more emotional aspects in decision-making</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BarChart3 className="h-4 w-4 text-primary mt-0.5" />
                          <span>Practice active listening in conversations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BarChart3 className="h-4 w-4 text-primary mt-0.5" />
                          <span>Balance planning with spontaneity</span>
                        </li>
                      </ul>
                    </div>

                    {selectedView === "overview" && (
                      <Button className="w-full bg-primary hover:bg-primary-600">View Detailed Analysis</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

