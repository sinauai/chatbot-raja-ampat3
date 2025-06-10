import { NextResponse } from "next/server"
import newsData from "@/news.json" // Updated path

export async function GET() {
  try {
    // Return only the metadata (title and URL) of the news articles
    const metadata = newsData.map((article) => ({
      title: article.title,
      url: article.url,
    }))

    return NextResponse.json({ metadata })
  } catch (error) {
    console.error("Error fetching news metadata:", error)
    return NextResponse.json({ error: "Failed to fetch news metadata" }, { status: 500 })
  }
}
