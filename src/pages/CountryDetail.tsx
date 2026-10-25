import { Link, useParams } from 'react-router-dom'
import { BackButton } from '../components/BackButton'
import { findCountryByCode } from '../lib/countries'
import {
  formatCurrencies,
  formatLanguages,
  formatPopulation,
  formatTopLevelDomains,
} from '../lib/format'

export function CountryDetail() {
  const { code } = useParams<{ code: string }>()
  const country = code ? findCountryByCode(code.toUpperCase()) : undefined

  if (!country) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <BackButton />
        <h1 className="mb-3 text-2xl font-extrabold">Country not found</h1>
        <p className="mb-6">We couldn’t find a country with that code.</p>
        <Link to="/" className="font-semibold underline">
          Return to all countries
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <BackButton />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <img
          src={country.flags.svg || country.flags.png}
          alt={`Flag of ${country.name}`}
          className="bg-page-bg aspect-[5/3] w-full object-contain"
        />

        <section>
          <h1 className="mb-8 text-2xl font-extrabold">{country.name}</h1>

          <div className="grid gap-8 sm:grid-cols-2">
            <dl className="space-y-3">
              <div>
                <dt className="inline font-semibold">Native Name: </dt>
                <dd className="inline">{country.nativeName || 'N/A'}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Population: </dt>
                <dd className="inline">
                  {formatPopulation(country.population)}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">Region: </dt>
                <dd className="inline">{country.region || 'N/A'}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Sub Region: </dt>
                <dd className="inline">{country.subregion || 'N/A'}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Capital: </dt>
                <dd className="inline">{country.capital || 'N/A'}</dd>
              </div>
            </dl>

            <dl className="space-y-3">
              <div>
                <dt className="inline font-semibold">Top Level Domain: </dt>
                <dd className="inline">
                  {formatTopLevelDomains(country.topLevelDomain)}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">Currencies: </dt>
                <dd className="inline">
                  {formatCurrencies(country.currencies)}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">Languages: </dt>
                <dd className="inline">{formatLanguages(country.languages)}</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </main>
  )
}
