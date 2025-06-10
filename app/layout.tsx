import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chatbot Berita Kompas.id",
  description: "Chatbot untuk menjawab pertanyaan berdasarkan berita di Kompas.id.",
    generator: 'v0.dev'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Add script for cross-origin communication */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', function(event) {
                // Only accept messages from allowed origins
                const allowedOrigins = ['*']; // Replace with specific origins in production
                if (allowedOrigins.includes('*') || allowedOrigins.includes(event.origin)) {
                  if (event.data.type === 'resize') {
                    // Handle resize messages
                    const height = event.data.height;
                    if (height && !isNaN(height)) {
                      document.body.style.height = height + 'px';
                    }
                  }
                }
              });
              
              // Send ready message to parent
              window.addEventListener('load', function() {
                if (window.parent !== window) {
                  window.parent.postMessage({ type: 'ready', from: 'kompas-chatbot' }, '*');
                }
              });
            `,
          }}
        />
      </head>
      <body className={cn("flex min-h-svh flex-col antialiased", inter.className)}>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </body>
    </html>
  )
}


import './globals.css'