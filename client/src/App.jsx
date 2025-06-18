import { useState } from 'react'
import './App.css'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ConnectAccount from './pages/accounts/Accounts-main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/workspace-connect" element={<ConnectAccount/>}/>
      </Routes>

        </Router>
    </>
  )
}

export default App
