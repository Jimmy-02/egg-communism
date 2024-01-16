'use client'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextUIProvider>
    <NextThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {children}
    </NextThemeProvider>
  </NextUIProvider>
)

export default ThemeProvider
