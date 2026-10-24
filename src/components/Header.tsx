import { Moon } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-surface text-text shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="text-base font-extrabold sm:text-xl">
          Where in the world?
        </h1>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 text-sm font-semibold"
        >
          <Moon size={18} aria-hidden="true" />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}
