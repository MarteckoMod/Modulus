import { useState } from 'react'
import './App.css'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ConnectAccount from './pages/accounts/Accounts-main'
import ConnectGoogleAdsButton from './pages/accounts/connect'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);
    console.log("Token saved to localStorage");
    window.history.replaceState({}, document.title, "/dashboard");
  } else {
    console.log("❌ No token found in URL.");
  }
}, [])
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/workspace-connect" element={<ConnectAccount/>}/>
            <Route path="/connect" element={<ConnectGoogleAdsButton/>}/>
      </Routes>

        </Router>
    </>
  )
}

export default App
