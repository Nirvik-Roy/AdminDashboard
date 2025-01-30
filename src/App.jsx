import './App.css'
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Dashboard from './View/Dashboard/Dashboard'
import Tables from './View/Tables/Tables'
import Bills from './View/Bills/Bills'
import Profile from './View/Profile/Profile'
import SignIn from './View/SignIn/SignIn'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/tables' element={<Tables />} />
          <Route path='/bills' element={<Bills />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
