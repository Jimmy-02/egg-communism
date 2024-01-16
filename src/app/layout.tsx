import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import ThemeProvider from '@/providers/theme-provider'
import './globals.css'
const RootLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-dvh font-sans antialiased', GeistSans.variable)}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
