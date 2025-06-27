'use client'

  import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { Switch } from '@/components/ui/switch'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light'
    console.log('Theme toggle clicked:', { current: resolvedTheme, new: newTheme })
    setTheme(newTheme)
  }

  return (
    <Switch 
      checked={isDark} 
      onCheckedChange={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Moon className="h-3 w-3 text-gray-700" />
      ) : (
        <Sun className="h-3 w-3 text-gray-700" />
      )}
    </Switch>
  )
}