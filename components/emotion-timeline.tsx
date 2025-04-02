"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface EmotionTimelineProps {
  detailed?: boolean
}

export function EmotionTimeline({ detailed = false }: EmotionTimelineProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Generate dates for the last 30 days
    const dates = Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - (29 - i))
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    })

    // Chart data
    const emotionData = {
      labels: dates,
      datasets: detailed
        ? [
            {
              label: "Joy",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 30),
              borderColor: "rgba(147, 51, 234, 1)",
              backgroundColor: "rgba(147, 51, 234, 0.2)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Sadness",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 10),
              borderColor: "rgba(79, 70, 229, 1)",
              backgroundColor: "rgba(79, 70, 229, 0.2)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Anger",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 15) + 5),
              borderColor: "rgba(236, 72, 153, 1)",
              backgroundColor: "rgba(236, 72, 153, 0.2)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Fear",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 5),
              borderColor: "rgba(16, 185, 129, 1)",
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              tension: 0.4,
              fill: true,
            },
          ]
        : [
            {
              label: "Positive Sentiment",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 50),
              borderColor: "rgba(147, 51, 234, 1)",
              backgroundColor: "rgba(147, 51, 234, 0.2)",
              tension: 0.4,
              fill: true,
            },
          ],
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: emotionData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: "Intensity",
            },
          },
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [detailed])

  return <canvas ref={chartRef} />
}

