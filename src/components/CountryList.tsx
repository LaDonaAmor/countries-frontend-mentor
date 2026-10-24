import type { Country } from '../types/country'
import { CountryCard } from './CountryCard'

type CountryListProps = {
  countries: Country[]
}

export function CountryList({ countries }: CountryListProps) {
  return (
    <section
      aria-label="Countries"
      className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </section>
  )
}
