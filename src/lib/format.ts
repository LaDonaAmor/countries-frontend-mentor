import type { Currency, Language } from '../types/country'

const populationFormatter = new Intl.NumberFormat('en-US')

export function formatPopulation(population: number): string {
  return populationFormatter.format(population)
}

export function formatCurrencies(
  currencies: Currency[] | null | undefined,
): string {
  return currencies?.map((currency) => currency.name).join(', ') || 'N/A'
}

export function formatLanguages(
  languages: Language[] | null | undefined,
): string {
  return languages?.map((language) => language.name).join(', ') || 'N/A'
}

export function formatTopLevelDomains(
  domains: string[] | null | undefined,
): string {
  return domains?.join(', ') || 'N/A'
}
