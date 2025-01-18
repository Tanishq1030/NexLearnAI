import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/homePage'
import LoginPage from './app/login/page'
import RegisterPage from './app/login/Register'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>  } />
      <Route path ="/login" element={<LoginPage />} />
      <Route path ="/register" element={<RegisterPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
