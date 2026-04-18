import type { Metadata } from 'next'
import { Arimo, Geist } from 'next/font/google'
import '@/assets/styles/globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang='en' className={cn("font-sans", geist.variable)}>
      <body className={`${lato.className}  antialiased`}>{children}</body>
    </html>
  )
}
