import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="bg-surface text-text shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-extrabold">
          Where in the world?
        </a>

        <ThemeToggle />
      </div>
    </header>
  )
}
