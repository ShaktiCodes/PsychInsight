import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { z } from "zod"

// Define the schema for personality analysis
const personalitySchema = z.object({
  traits: z.object({
    openness: z.number().min(0).max(100),
    conscientiousness: z.number().min(0).max(100),
    extraversion: z.number().min(0).max(100),
    agreeableness: z.number().min(0).max(100),
    neuroticism: z.number().min(0).max(100),
  }),
  communicationStyle: z.object({
    primary: z.string(),
    secondary: z.string().optional(),
    description: z.string(),
  }),
  emotionalTone: z.object({
    overall: z.string(),
    positivePercentage: z.number().min(0).max(100),
    negativePercentage: z.number().min(0).max(100),
    neutralPercentage: z.number().min(0).max(100),
  }),
  summary: z.string(),
})

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid input. Expected an array of messages." }, { status: 400 })
    }

    // Sample of messages to analyze (limit for API efficiency)
    const messageSample = messages.slice(0, 100).join("\n")

    // Generate structured analysis using AI SDK
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: personalitySchema,
      prompt: `Analyze the following chat messages and provide a psychological profile based on the Big Five personality model, communication style, and emotional tone. Here are the messages:\n\n${messageSample}`,
      system:
        "You are an expert psychological profiler. Analyze communication patterns objectively and ethically. Do not make extreme judgments or clinical diagnoses. Focus on observable patterns in the text.",
    })

    return NextResponse.json({ analysis: object })
  } catch (error) {
    console.error("Error analyzing messages:", error)
    return NextResponse.json({ error: "Failed to analyze messages" }, { status: 500 })
  }
}

// Helper function to generate structured objects with the AI SDK
async function generateObject<T extends z.ZodType>({
  model,
  schema,
  prompt,
  system,
}: {
  model: any
  schema: T
  prompt: string
  system?: string
}) {
  return await generateText({
    model,
    prompt,
    system,
    format: "json" as any,
  }).then((result) => {
    try {
      const parsed = schema.parse(JSON.parse(result.text))
      return { object: parsed }
    } catch (error) {
      console.error("Failed to parse AI response:", error)
      throw new Error("Failed to generate valid structured data")
    }
  })
}

