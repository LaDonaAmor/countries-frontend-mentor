import { useState } from 'react'
import { CountryList } from '../components/CountryList'
import { RegionFilter } from '../components/RegionFilter'
import { SearchBar } from '../components/SearchBar'
import { countries, filterCountries } from '../lib/countries'

export function Home() {
  const [searchText, setSearchText] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const filteredCountries = filterCountries(
    countries,
    searchText,
    selectedRegion,
  )

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={searchText} onChange={setSearchText} />

        <RegionFilter value={selectedRegion} onChange={setSelectedRegion} />
      </div>

      {filteredCountries.length > 0 ? (
        <CountryList countries={filteredCountries} />
      ) : (
        <p className="text-text py-12 text-center">
          No countries match the current filters.
        </p>
      )}
    </main>
  )
}
