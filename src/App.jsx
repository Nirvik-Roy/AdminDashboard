import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Dashboard from './View/Dashboard/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Dashboard/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
