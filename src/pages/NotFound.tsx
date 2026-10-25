import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
      <h1 className="mb-3 text-2xl font-extrabold">Page not found</h1>
      <p className="mb-6">The page you requested does not exist.</p>
      <Link to="/" className="font-semibold underline">
        Return home
      </Link>
    </main>
  )
}
