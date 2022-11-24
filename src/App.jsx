import React from 'react'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import HeaderNav from './components/HeaderNav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import UserAccount from './pages/UserAccount'

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account" element={<UserAccount />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
