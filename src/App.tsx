import { Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { CountryDetail } from './pages/CountryDetail'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function AppLayout() {
  return (
    <div className="app-container bg-page-bg text-text min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
