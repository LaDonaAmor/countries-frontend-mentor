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

      <select
        id="region-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-surface text-text w-full rounded-md px-5 py-4 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-900 dark:focus-visible:ring-white"
      >
        <option value="">Filter by Region</option>

        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  )
}
