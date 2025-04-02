"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function CommunicationStats() {
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

    // Generate hours of the day
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`)

    // Chart data
    const communicationData = {
      labels: hours,
      datasets: [
        {
          label: "Message Frequency",
          data: [5, 2, 1, 0, 0, 0, 3, 8, 15, 25, 30, 28, 35, 42, 38, 30, 25, 35, 40, 30, 20, 15, 10, 8],
          backgroundColor: "rgba(147, 51, 234, 0.8)",
          borderRadius: 4,
        },
      ],
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: communicationData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Message Count",
            },
          },
          x: {
            title: {
              display: true,
              text: "Time of Day",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Time: ${tooltipItems[0].label}`,
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="h-64">
        <canvas ref={chartRef} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Peak Activity</h3>
          <p className="text-2xl font-bold">2:00 PM</p>
          <p className="text-xs text-gray-500">Most active time of day</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Average Response Time</h3>
          <p className="text-2xl font-bold">4.2 minutes</p>
          <p className="text-xs text-gray-500">Time to respond to messages</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Communication Style</h3>
          <p className="text-2xl font-bold">Analytical</p>
          <p className="text-xs text-gray-500">Based on language patterns</p>
        </div>
      </div>
    </div>
  )
}

