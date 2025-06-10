"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useEmbedMode() {
  // Gunakan useState dengan nilai default false
  const [isEmbedMode, setIsEmbedMode] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Periksa parameter embed hanya setelah komponen di-mount
    const embedParam = searchParams?.get("embed")
    setIsEmbedMode(embedParam === "true")
  }, [searchParams])

  return isEmbedMode
}
