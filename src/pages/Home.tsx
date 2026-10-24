import { CountryList } from '../components/CountryList'
import { countries } from '../lib/countries'

export function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <CountryList countries={countries} />
    </main>
  )
}
