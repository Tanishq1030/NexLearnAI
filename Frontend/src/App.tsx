import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/homePage'
import LoginPage from './app/login/page'
import RegisterPage from './app/login/Register'
import {motion } from 'framer-motion'

function App() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.3 }}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>  } />
      <Route path ="/login" element={<LoginPage />} />
      <Route path ="/register" element={<RegisterPage />} />
      </Routes>
      </BrowserRouter>
    </motion.div>
  )
}

export default App
