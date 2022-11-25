import React from 'react'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
