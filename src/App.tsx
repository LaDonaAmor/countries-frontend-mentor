import { CountryCard } from './components/CountryCard'
import { Header } from './components/Header'
import { countries } from './lib/countries'

export default function App() {
  const firstCountry = countries[0]

  return (
    <div className="app-container bg-page-bg text-text min-h-screen">
      <Header />

      <main className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {firstCountry && <CountryCard country={firstCountry} />}
      </main>
    </div>
  )
}
