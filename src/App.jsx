import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import PrivateRoutes from './Routes/PrivateRoutes'
function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path='/' exact />
          <Route element={<Profile />} path='me' />
        </Route>
        <Route element={<Login />} path='login' />
        <Route element={<Register />} path='register' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </>
  )
}

export default App
