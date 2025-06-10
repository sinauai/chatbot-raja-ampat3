import { NextResponse } from "next/server"
import newsData from "@/news.json"

export async function GET() {
  try {
    // Prepare context from news data
    const context = newsData
      .map((article, index) => {
        return `ARTIKEL ${index + 1}:
JUDUL: ${article.title}
URL: ${article.url}

${article.full_text}`
      })
      .join("\n\n---\n\n")

    // Return the context
    return NextResponse.json({ context })
  } catch (error) {
    console.error("Error generating context:", error)
    return NextResponse.json({ error: "Failed to generate context" }, { status: 500 })
  }
}
