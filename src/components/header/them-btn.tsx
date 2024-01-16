'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Loader2Icon, MoonIcon, SunIcon } from 'lucide-react'

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted)
    return (
      <Button aria-label="Toggle Dark Mode" variant="outline" size="icon">
        <Loader2Icon className="animate-spin" />
      </Button>
    )

  return (
    <Button aria-label="Toggle Dark Mode" variant="outline" size="icon" onClick={toggleTheme}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeBtn
