import { FaArrowLeft } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const cameFromApp = Boolean(location.state?.from)

  function handleBack() {
    if (cameFromApp) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="bg-surface text-text mb-12 inline-flex items-center gap-3 rounded-md px-8 py-2 shadow-md transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-white"
    >
      <FaArrowLeft aria-hidden="true" />
      <span>Back</span>
    </button>
  )
}
