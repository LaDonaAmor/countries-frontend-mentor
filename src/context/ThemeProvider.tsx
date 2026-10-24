import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

type ThemeProviderProps = {
  children: ReactNode
}

function getInitialTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
  } catch {
    // Storage may be unavailable; fall back to the OS preference.
  }

  try {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    return prefersDark ? 'dark' : 'light'
  } catch {
    // Use light mode if the OS preference is unavailable.
    return 'light'
  }
}

type ThemeProviderPropsWithChildren = ThemeProviderProps

export function ThemeProvider({ children }: ThemeProviderPropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')

    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Keep the current session working even if persistence fails.
    }
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
