import { useState } from 'react'
import './CSS/Style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App