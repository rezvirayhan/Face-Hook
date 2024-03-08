import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import NotFound from './Pages/NotFound'
function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<Login/>} path='login'/>
        <Route element={<Profile/>} path='me'/>
        <Route element={<Register/>} path='register'/>
        <Route element={<NotFound/>} path='*'/>
      </Routes>
    </>
  )
}

export default App
