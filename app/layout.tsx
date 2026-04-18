import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import '@/assets/styles/globals.css'

const lato = Arimo({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Літери',
  description: 'Сучасна та класична література українською',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${lato.className}  antialiased`}>{children}</body>
    </html>
  )
}
