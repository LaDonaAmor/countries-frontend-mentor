import { FaSearch } from 'react-icons/fa'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl">
      <label htmlFor="country-search" className="sr-only">
        Search for a country
      </label>

      <FaSearch
        aria-hidden="true"
        className="text-muted pointer-events-none absolute top-1/2 left-5 -translate-y-1/2"
      />

      <input
        id="country-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a country..."
        className="bg-surface text-text placeholder:text-muted w-full rounded-md py-4 pr-4 pl-14 shadow-sm outline-none hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-900 dark:focus-visible:ring-white"
      />
    </div>
  )
}
