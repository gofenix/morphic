import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header-cosine'
import Footer from '@/components/footer-cosine'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = '余弦法律：您的AI分析引擎，智能法律助手'
const description =
  '通过新一代人工智能（Agent），为律师和当事人提供前所未有的法律服务体验。我们的平台通过深入分析、智能检索和精准推荐，有效辅助法律从业者减少40%日常工作量。'

export const metadata: Metadata = {
  metadataBase: new URL('https://cosine.work'),
  title,
  description,
  openGraph: {
    title,
    description
  }
  // twitter: {
  //   title,
  //   description,
  //   card: 'summary_large_image',
  //   creator: '@miiura'
  // }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppStateProvider>
            <Header />
            {children}
            <Sidebar />
            <Footer />
            <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
