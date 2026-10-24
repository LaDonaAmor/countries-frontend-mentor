import { Header } from './components/Header'
import { Home } from './pages/Home'

export default function App() {
  return (
    <div className="app-container bg-page-bg text-text min-h-screen">
      <Header />
      <Home />
    </div>
  )
}
