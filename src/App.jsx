import './App.css'
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Dashboard from './View/Dashboard/Dashboard'
import Tables from './View/Tables/Tables'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/tables' element={<Tables />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
