"use client"

import { useState } from "react"
import { Brain, FileText, UploadCloud, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploader } from "@/components/file-uploader"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"

export default function UploadPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedPlatform, setSelectedPlatform] = useState<string>("whatsapp")

  const handleFileUpload = () => {
    setIsAnalyzing(true)
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false)
      setUploadStatus("success")
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Upload Chat Data</h1>
              <p className="text-gray-600">Import your chat logs for psychological analysis</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-primary-50 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-primary-800">
                    <UploadCloud className="h-5 w-5" />
                    Upload Chat Data
                  </CardTitle>
                  <CardDescription>Select a platform and upload your chat export</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="whatsapp" className="w-full" onValueChange={setSelectedPlatform}>
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                      <TabsTrigger value="discord">Discord</TabsTrigger>
                      <TabsTrigger value="slack">Slack</TabsTrigger>
                    </TabsList>

                    <TabsContent value="whatsapp" className="space-y-4">
                      <div className="bg-primary-50 rounded-lg p-4 text-sm">
                        <h3 className="font-medium mb-2 text-primary-800">How to export WhatsApp chats:</h3>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                          <li>Open the chat you want to export</li>
                          <li>Tap the three dots in the top right</li>
                          <li>Select "More" then "Export chat"</li>
                          <li>Choose "Without media"</li>
                          <li>Save the .txt file and upload it here</li>
                        </ol>
                      </div>
                      <FileUploader onUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
                    </TabsContent>

                    <TabsContent value="discord" className="space-y-4">
                      <div className="bg-primary-50 rounded-lg p-4 text-sm">
                        <h3 className="font-medium mb-2 text-primary-800">How to export Discord chats:</h3>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                          <li>Install a Discord chat exporter tool</li>
                          <li>Select the channel you want to export</li>
                          <li>Export as JSON format</li>
                          <li>Upload the JSON file here</li>
                        </ol>
                      </div>
                      <FileUploader onUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
                    </TabsContent>

                    <TabsContent value="slack" className="space-y-4">
                      <div className="bg-primary-50 rounded-lg p-4 text-sm">
                        <h3 className="font-medium mb-2 text-primary-800">How to export Slack chats:</h3>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                          <li>Go to your Slack workspace settings</li>
                          <li>Select "Import/Export Data"</li>
                          <li>Choose "Export" and select the channels</li>
                          <li>Download the ZIP file and upload it here</li>
                        </ol>
                      </div>
                      <FileUploader onUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <Card className="h-full border-none shadow-md">
                <CardHeader className="bg-primary-50 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-primary-800">
                    <FileText className="h-5 w-5" />
                    Upload Status
                  </CardTitle>
                  <CardDescription>Track your data processing status</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      {uploadStatus === "idle" ? (
                        <div className="h-8 w-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-500">1</span>
                        </div>
                      ) : uploadStatus === "success" ? (
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      ) : (
                        <AlertCircle className="h-8 w-8 text-red-500" />
                      )}
                      <div>
                        <p className="font-medium">Upload {selectedPlatform} Data</p>
                        <p className="text-sm text-gray-500">
                          {uploadStatus === "idle"
                            ? "Waiting for file..."
                            : uploadStatus === "success"
                              ? "Successfully uploaded!"
                              : "Upload failed"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {uploadStatus === "success" ? (
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      ) : (
                        <div className="h-8 w-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-500">2</span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium">Process Data</p>
                        <p className="text-sm text-gray-500">
                          {uploadStatus === "success" ? "Processing complete" : "Waiting for upload..."}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-500">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Generate Insights</p>
                        <p className="text-sm text-gray-500">Waiting for processing...</p>
                      </div>
                    </div>

                    {uploadStatus === "success" && (
                      <Button className="w-full mt-4 bg-primary hover:bg-primary-600">View Analysis Results</Button>
                    )}

                    <div className="bg-muted rounded-lg p-4 mt-6">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Brain className="h-4 w-4 text-primary" />
                        Privacy Guarantee
                      </h4>
                      <p className="text-xs text-gray-600">
                        Your data is processed securely and never stored without your explicit consent. All analysis
                        happens in your secure environment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {uploadStatus === "success" && (
            <Card className="mt-6 border-green-100 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-medium text-green-800">Analysis Complete!</h3>
                    <p className="text-sm text-green-700">
                      Your chat data has been successfully analyzed. View your psychological profile on the dashboard.
                    </p>
                  </div>
                  <Button className="ml-auto bg-green-600 hover:bg-green-700">View Dashboard</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}

