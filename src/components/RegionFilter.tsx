import { ChevronDown } from 'lucide-react'

type RegionFilterProps = {
  value: string
  onChange: (region: string) => void
}

const regions = [
  { label: 'Africa', value: 'Africa' },
  { label: 'America', value: 'Americas' },
  { label: 'Asia', value: 'Asia' },
  { label: 'Europe', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' },
]

export function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <div className="w-full sm:w-52">
      <label htmlFor="region-filter" className="sr-only">
        Filter by region
      </label>

      <div className="relative">
        <select
          id="region-filter"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="bg-surface text-text w-full appearance-none rounded-md py-3 pr-10 pl-4 text-sm shadow-sm outline-none hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-900 dark:focus-visible:ring-white"
        >
          <option value="">Filter by Region</option>

          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="text-text pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
        />
      </div>
    </div>
  )
}
