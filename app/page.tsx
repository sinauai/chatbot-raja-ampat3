import { Suspense } from "react"
import { ChatForm } from "@/components/chat-form"

export default function Page() {
  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Memuat...</div>}>
        <ChatForm />
      </Suspense>
    </div>
  )
}
