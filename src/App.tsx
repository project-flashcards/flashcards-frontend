import { Routes, Route, Navigate } from 'react-router-dom'
import CardsPage from './pages/CardsPage'
import PromoPage from './pages/PromoPage'
import PracticePage from './pages/PracticePage'
import Header from './layouts/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className=" bg-white p-4 mx-auto h-full shadow-md rounded-md max-w-screen-xl">
        <Routes>
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/practice" element={<PracticePage/>} />
          <Route path="*" element={<Navigate to="/cards" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
