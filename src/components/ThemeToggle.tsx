import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2"
    >
      {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}
