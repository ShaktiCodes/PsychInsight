"use client"

import type React from "react"

import { useState } from "react"
import { UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface FileUploaderProps {
  onUpload: () => void
  isAnalyzing: boolean
}

export function FileUploader({ onUpload, isAnalyzing }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "processing" | "complete" | "error">("idle")

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    if (selectedFile) {
      setUploadStatus("uploading")

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setUploadStatus("processing")

            // Simulate processing time
            setTimeout(() => {
              setUploadStatus("complete")
              onUpload()
            }, 1500)

            return 100
          }
          return prev + 5
        })
      }, 150)
    }
  }

  const getStatusText = () => {
    switch (uploadStatus) {
      case "uploading":
        return `Uploading ${selectedFile?.name}... ${uploadProgress}%`
      case "processing":
        return "Processing chat data..."
      case "complete":
        return "Analysis complete!"
      case "error":
        return "Error uploading file. Please try again."
      default:
        return selectedFile ? `Selected: ${selectedFile.name}` : "No file selected"
    }
  }

  return (
    <Card
      className={cn(
        "w-full max-w-md border-2 border-dashed transition-all duration-300",
        dragActive ? "border-primary bg-primary-50" : "border-gray-200",
        uploadStatus === "complete" && "border-green-500 bg-green-50",
      )}
    >
      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className="w-full flex flex-col items-center justify-center space-y-2"
        >
          <div
            className={cn(
              "rounded-full p-3 transition-all duration-300",
              uploadStatus === "idle"
                ? "bg-primary/10"
                : uploadStatus === "uploading"
                  ? "bg-primary/20"
                  : uploadStatus === "processing"
                    ? "bg-secondary/20"
                    : uploadStatus === "complete"
                      ? "bg-green-100"
                      : "bg-red-100",
            )}
          >
            {uploadStatus === "idle" && <UploadCloud className="h-6 w-6 text-primary" />}
            {uploadStatus === "uploading" && <UploadCloud className="h-6 w-6 text-primary animate-pulse" />}
            {uploadStatus === "processing" && <Brain className="h-6 w-6 text-secondary animate-pulse" />}
            {uploadStatus === "complete" && <Check className="h-6 w-6 text-green-600" />}
            {uploadStatus === "error" && <AlertCircle className="h-6 w-6 text-red-600" />}
          </div>

          {uploadStatus === "idle" && (
            <>
              <p className="text-sm text-center">
                <span className="font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">Supports WhatsApp, Discord, and Slack exports</p>
            </>
          )}

          <p
            className={cn(
              "text-sm font-medium",
              uploadStatus === "complete" && "text-green-600",
              uploadStatus === "error" && "text-red-600",
            )}
          >
            {getStatusText()}
          </p>

          {uploadStatus === "uploading" && <Progress value={uploadProgress} className="h-2 w-full max-w-xs" />}

          {uploadStatus === "idle" && (
            <>
              <input
                id="file-upload"
                type="file"
                accept=".txt,.json,.csv,.zip"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="w-full">
                <Button
                  variant="outline"
                  className="w-full mt-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary-50"
                  disabled={isAnalyzing}
                >
                  Select File
                </Button>
              </label>
            </>
          )}
        </div>

        {selectedFile && uploadStatus === "idle" && (
          <div className="w-full space-y-2">
            <Button className="w-full bg-primary hover:bg-primary-600" onClick={handleSubmit} disabled={isAnalyzing}>
              Analyze Chat Data
            </Button>
            <p className="text-xs text-center text-gray-500">
              Your data is processed securely and never stored without your consent
            </p>
          </div>
        )}

        {uploadStatus === "complete" && (
          <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.location.reload()}>
            View Results
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
import { Brain } from "lucide-react"

