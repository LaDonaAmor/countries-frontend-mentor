import { useState } from 'react'
import { CountryList } from '../components/CountryList'
import { SearchBar } from '../components/SearchBar'
import { countries, filterCountries } from '../lib/countries'

export function Home() {
  const [searchText, setSearchText] = useState('')
  const filteredCountries = filterCountries(countries, searchText)

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <SearchBar value={searchText} onChange={setSearchText} />
      </div>

      {filteredCountries.length > 0 ? (
        <CountryList countries={filteredCountries} />
      ) : (
        <p className="text-text py-12 text-center">
          No countries match “{searchText.trim()}”.
        </p>
      )}
    </main>
  )
}
