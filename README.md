# Chatbot Berita Kompas.id

Chatbot yang menjawab pertanyaan berdasarkan berita di Kompas.id. 

## Cara Mengubah Konten Berita

Untuk mengubah konten berita yang digunakan oleh chatbot, Anda perlu mengedit file `news.json` di root project. File ini berisi array artikel berita dengan format berikut:

\`\`\`json
[
  {
    "url": "URL artikel",
    "published_at": 45786, // Timestamp publikasi
    "title": "Judul artikel",
    "full_text": "Teks lengkap artikel"
  },
  // Artikel lainnya...
]
\`\`\`

Setiap artikel harus memiliki properti berikut:
- `url`: URL artikel asli
- `published_at`: Timestamp publikasi (opsional)
- `title`: Judul artikel
- `full_text`: Teks lengkap artikel

## Cara Mengubah Contoh Pertanyaan

Untuk mengubah contoh pertanyaan yang digunakan oleh chatbot, Anda perlu mengedit file `questions.json` di root project. File ini berisi array pertanyaan

## Cara Menggunakan Embed

Untuk menyematkan chatbot di website lain, cukup tempelkan URL chatbot, misalnya https://chatbot-contoh.vercel.app atau gunakan kode iframe berikut:

```html
<iframe 
  src="https://chatbot-contoh.vercel.app/?embed=true" 
  width="100%" 
  height="600" 
  style="border: 1px solid #ddd; border-radius: 8px;" 
  allow="clipboard-write"
></iframe>

