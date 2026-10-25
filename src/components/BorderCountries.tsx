import { Link, useLocation } from 'react-router-dom'
import { findCountriesByBorderCodes } from '../lib/countries'

type BorderCountriesProps = {
  borders: string[] | null | undefined
}

export function BorderCountries({ borders }: BorderCountriesProps) {
  const location = useLocation()
  const borderCountries = findCountriesByBorderCodes(borders)

  return (
    <section className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start">
      <h2 className="shrink-0 font-semibold">Border Countries:</h2>

      {borderCountries.length > 0 ? (
        <ul className="flex flex-wrap gap-3">
          {borderCountries.map((country) => (
            <li key={country.alpha3Code}>
              <Link
                to={`/country/${country.alpha3Code}`}
                state={{ from: location.pathname }}
                className="bg-surface text-text inline-block min-w-24 rounded-sm px-5 py-2 text-center text-sm shadow-sm hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:hover:bg-blue-950 dark:focus-visible:outline-white"
              >
                {country.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No bordering countries.</p>
      )}
    </section>
  )
}
