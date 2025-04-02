"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function PersonalityChart() {
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

    chartInstance.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
        datasets: [
          {
            label: "Personality Profile",
            data: [78, 82, 45, 65, 30],
            backgroundColor: "rgba(147, 51, 234, 0.2)",
            borderColor: "rgba(147, 51, 234, 0.8)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(147, 51, 234, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(147, 51, 234, 1)",
          },
        ],
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
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

  return <canvas ref={chartRef} />
}

