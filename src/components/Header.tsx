import { ThemeToggle } from './ThemeToggle'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-surface text-text shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-base font-extrabold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 sm:text-xl dark:focus-visible:outline-white"
        >
          Where in the world?
        </Link>

        <ThemeToggle />
      </div>
    </header>
  )
}
