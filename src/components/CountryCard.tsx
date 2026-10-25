import { Link } from 'react-router-dom'
import type { Country } from '../types/country'
import { formatPopulation } from '../lib/format'

type CountryCardProps = {
  country: Country
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      to={`/country/${country.alpha3Code}`}
      state={{ from: '/' }}
      className="block max-w-66 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-white"
    >
      <article className="bg-surface text-text max-w-66 overflow-hidden rounded-md shadow-sm">
        <img
          src={country.flags.svg || country.flags.png}
          alt={`Flag of ${country.name}`}
          loading="lazy"
          decoding="async"
          className="bg-page-bg aspect-5/3 w-full object-cover"
        />

        <div className="p-6">
          <h2 className="mb-4 text-lg font-extrabold">{country.name}</h2>

          <dl className="space-y-1 text-sm">
            <div>
              <dt className="inline font-semibold">Population: </dt>
              <dd className="inline">{formatPopulation(country.population)}</dd>
            </div>

            <div>
              <dt className="inline font-semibold">Region: </dt>
              <dd className="inline">{country.region}</dd>
            </div>

            {country.capital && (
              <div>
                <dt className="inline font-semibold">Capital: </dt>
                <dd className="inline">{country.capital}</dd>
              </div>
            )}
          </dl>
        </div>
      </article>
    </Link>
  )
}
