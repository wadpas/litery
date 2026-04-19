import type { Metadata } from 'next'
import { Arimo, Geist } from 'next/font/google'
import '@/assets/styles/globals.css'
import { cn } from '@/lib/utils'
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants'
import Header from '@/components/shared/header'
import Footer from '@/components/footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const lato = Arimo({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `${APP_NAME} | ${APP_DESCRIPTION}`,
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn('font-sans', geist.variable)}>
      <body className={`${lato.className}  antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
