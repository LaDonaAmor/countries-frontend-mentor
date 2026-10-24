import countriesJson from '../data/countries.json'
import type { Country } from '../types/country'

export const countries: Country[] = countriesJson

const countriesByCode = new Map<string, Country>(
  countries.map((country) => [country.alpha3Code, country] as const),
)

export function findCountryByCode(alpha3Code: string): Country | undefined {
  return countriesByCode.get(alpha3Code)
}

export function findCountriesByBorderCodes(
  borderCodes: readonly string[] | null | undefined,
): Country[] {
  if (!borderCodes?.length) {
    return []
  }

  return borderCodes
    .map((code) => findCountryByCode(code))
    .filter((country): country is Country => country !== undefined)
}

export function filterCountries(
  countriesToFilter: Country[],
  searchText: string,
  selectedRegion: string,
): Country[] {
  const query = searchText.trim().toLowerCase()

  return countriesToFilter.filter((country) => {
    const matchesSearch =
      query === '' || country.name.toLowerCase().includes(query)

    const matchesRegion =
      selectedRegion === '' || country.region === selectedRegion

    return matchesSearch && matchesRegion
  })
}
