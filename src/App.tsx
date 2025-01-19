import { Routes, Route, Navigate } from 'react-router-dom'
import CardsPage from './pages/CardsPage'
import PromoPage from './pages/PromoPage'
import Header from './layouts/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="*" element={<Navigate to="/cards" />} />
      </Routes>
    </div>
  )
}

export default App
